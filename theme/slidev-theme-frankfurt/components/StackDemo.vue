<template>
  <div class="stack-demo">
    <div class="stack">
      <transition-group name="stack-fade" tag="div">
        <div v-for="(item, idx) in stack" :key="idx" class="stack-item">
          {{ item }}
        </div>
      </transition-group>
    </div>
    <div class="controls">
      <input v-model="inputValue" @keyup.enter="pushStack" placeholder="值" />
      <button @click="pushStack">入栈</button>
      <button @click="popStack">出栈</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const stack = ref([]);
const inputValue = ref('');
function pushStack() {
  if (!inputValue.value.trim()) return;
  stack.value.push(inputValue.value.trim());
  inputValue.value = '';
}
function popStack() {
  if (stack.value.length === 0) return;
  stack.value.pop();
}
</script>

<style scoped>
.stack-demo {
  width: 220px;
  margin: 30px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px #ccc;
}
.stack {
  min-height: 180px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-bottom: 18px;
}
.stack-item {
  width: 120px;
  height: 36px;
  margin: 6px 0;
  background: #4f8cff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 18px;
  box-shadow: 0 1px 4px #bbb;
  transition: all 0.3s;
}
.stack-fade-enter-active, .stack-fade-leave-active {
  transition: all 0.3s;
}
.stack-fade-enter-from {
  opacity: 0;
  transform: translateY(-40px) scale(0.7);
}
.stack-fade-leave-to {
  opacity: 0;
  transform: translateY(-40px) scale(0.7);
}
.controls {
  display: flex;
  gap: 10px;
}
input[type="text"], input {
  width: 60px;
  padding: 4px;
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
</style>
