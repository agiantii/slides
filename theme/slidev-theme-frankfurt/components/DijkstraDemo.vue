<template>
  <div class="dijkstra-demo">
    <svg :width="svgWidth" :height="svgHeight">
      <!-- 边 -->
      <g>
        <line v-for="(edge, i) in edges" :key="i"
          :x1="nodes[edge[0]].x" :y1="nodes[edge[0]].y"
          :x2="nodes[edge[1]].x" :y2="nodes[edge[1]].y"
          stroke="#bbb" stroke-width="2" />
        <text v-for="(edge, i) in edges" :key="'t'+i"
          :x="(nodes[edge[0]].x + nodes[edge[1]].x) / 2"
          :y="(nodes[edge[0]].y + nodes[edge[1]].y) / 2 - 8"
          font-size="14" fill="#888">{{ edge[2] }}</text>
      </g>
      <!-- 节点 -->
      <g>
        <circle v-for="(node, idx) in nodes" :key="idx"
          :cx="node.x" :cy="node.y" r="22"
          :fill="visited[idx] ? '#4f8cff' : '#fff'"
          stroke="#4f8cff" stroke-width="3" />
        <text v-for="(node, idx) in nodes" :key="'n'+idx"
          :x="node.x" :y="node.y+6" text-anchor="middle"
          font-size="18" :fill="visited[idx] ? '#fff' : '#4f8cff'">{{ String.fromCharCode(65+idx) }}</text>
      </g>
    </svg>
    <div class="controls">
      <button @click="runStep" :disabled="finished">下一步</button>
      <button @click="reset">重置</button>
      <span v-if="finished" style="color:#4f8cff">已完成</span>
    </div>
    <div class="info">
      <div v-for="(d, i) in dist" :key="i">
        {{ String.fromCharCode(65+i) }}: {{ d === Infinity ? '∞' : d }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// 节点布局
const nodes = [
  { x: 60, y: 120 },
  { x: 200, y: 60 },
  { x: 340, y: 120 },
  { x: 120, y: 220 },
  { x: 280, y: 220 },
];
// 边 [起点, 终点, 权重]
const edges = [
  [0, 1, 2], [0, 3, 4], [1, 2, 1], [1, 3, 3],
  [2, 4, 5], [3, 4, 1], [3, 2, 2]
];
const svgWidth = 400;
const svgHeight = 280;
const dist = ref([0, Infinity, Infinity, Infinity, Infinity]);
const visited = ref([true, false, false, false, false]);
const finished = ref(false);
function runStep() {
  // 找到未访问且距离最小的点
  let min = Infinity, u = -1;
  for (let i = 0; i < dist.value.length; i++) {
    if (!visited.value[i] && dist.value[i] < min) {
      min = dist.value[i]; u = i;
    }
  }
  if (u === -1) { finished.value = true; return; }
  visited.value[u] = true;
  // 松弛操作
  for (const [from, to, w] of edges) {
    if (from === u && !visited.value[to]) {
      if (dist.value[to] > dist.value[u] + w) {
        dist.value[to] = dist.value[u] + w;
      }
    }
    if (to === u && !visited.value[from]) {
      if (dist.value[from] > dist.value[u] + w) {
        dist.value[from] = dist.value[u] + w;
      }
    }
  }
}
function reset() {
  dist.value = [0, Infinity, Infinity, Infinity, Infinity];
  visited.value = [true, false, false, false, false];
  finished.value = false;
}
</script>

<style scoped>
.dijkstra-demo {
  width: 420px;
  margin: 30px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px #ccc;
}
svg {
  display: block;
  margin: 0 auto 18px auto;
  background: #f7faff;
  border-radius: 8px;
}
.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
}
button {
  padding: 6px 14px;
  border: none;
  border-radius: 4px;
  background: #4f8cff;
  color: #fff;
  cursor: pointer;
}
button:active {
  background: #3570c9;
}
.info {
  display: flex;
  gap: 18px;
  justify-content: center;
  font-size: 16px;
  margin-top: 8px;
}
</style>
