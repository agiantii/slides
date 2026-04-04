require('dotenv').config()
const { NodeSSH } = require('node-ssh')
const path = require('path')
const fs = require('fs')
const ssh = new NodeSSH()

// ===================== 从环境变量读取配置 =====================
const config = {
    host: process.env.SSH_HOST || 'agiantii.top',
    port: parseInt(process.env.SSH_PORT) || 22,
    username: process.env.SSH_USERNAME || 'root',
    password: process.env.SSH_PASSWORD,
    privateKey: process.env.SSH_PRIVATE_KEY_PATH, // 密钥登录用这个
}

const localDist = process.env.LOCAL_DIST || './dist'
const remotePath = process.env.REMOTE_PATH || '/www/wwwroot/slides.agiantii.top' // 服务器目标目录
// ====================================================

// 验证必要的环境变量
if (!config.password && !config.privateKey) {
    console.error('❌ 错误：请设置 SSH_PASSWORD 或 SSH_PRIVATE_KEY_PATH 环境变量')
    process.exit(1)
}

// 计算文件总数的辅助函数
function getFileCount(dir) {
    let count = 0
    const items = fs.readdirSync(dir)
    for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)
        if (stat.isDirectory()) {
            count += getFileCount(fullPath)
        } else {
            count++
        }
    }
    return count
}

async function upload() {
    try {
        await ssh.connect(config)
        console.log('✅ SSH 连接成功')
        console.log(`📁 本地目录: ${localDist}`)
        console.log(`🌐 远程目录: ${remotePath}`)

        // 计算总文件数用于进度显示
        const totalFiles = getFileCount(localDist)
        let uploadedFiles = 0

        console.log(`📊 准备上传 ${totalFiles} 个文件...\n`)

        // 上传整个 dist 目录（覆盖、递归、最快）
        await ssh.putDirectory(localDist, remotePath, {
            recursive: true,
            concurrency: 10,
            validate: function (itemPath) {
                uploadedFiles++
                const progress = ((uploadedFiles / totalFiles) * 100).toFixed(2)
                // 每上传一个文件或每10%显示一次进度
                if (uploadedFiles % 10 === 0 || uploadedFiles === totalFiles) {
                    console.log(`⏳ 上传进度: ${uploadedFiles}/${totalFiles} (${progress}%)`)
                }
                return true
            },
        })

        console.log('\n🎉 dist 上传完成！')
    } catch (err) {
        console.log('❌ 上传失败：', err.message)
    } finally {
        ssh.dispose()
    }
}

upload()