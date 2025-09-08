<script setup>
import { ref } from "vue";

const display = ref("0");

function append(value) {
  if (display.value === "0" && !isNaN(value)) {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function calculate() {
  try {
    display.value = eval(display.value).toString();
  } catch {
    display.value = "Erro";
  }
}
</script>

<template>
  <div class="calculator__body">
    <div class="calculator__body__display">
      <span>{{ display }}</span>
    </div>
    <div class="calculator__body__buttons">
      <!-- Primeira linha -->
      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="append('+')">+</button>

      <!-- Segunda linha -->
      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>
      <button @click="append('-')">-</button>

      <!-- Terceira linha -->
      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>
      <button @click="append('9')">9</button>
      <button @click="append('/')">/</button>

      <!-- Quarta linha -->
      <button @click="append('0')">0</button>
      <button class="clear" @click="clearDisplay">C</button>
      <button class="equal" @click="calculate">=</button>
      <button @click="append('*')">*</button>
    </div>
  </div>
</template>

<style scoped>
.calculator__body {
  height: max-content;
  width: 250px;
  margin: auto;
  font-family: Arial, sans-serif;
  background-color: #222;
  padding: 15px;
  border-radius: 5px;
}

.calculator__body__display {
  background: #000;
  color: #fff;
  text-align: right;
  padding: 15px;
  font-size: 24px;
  border-radius: 8px;
  margin-bottom: 15px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.calculator__body__buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.calculator__body__buttons button {
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  background: #f0f0f0;
  cursor: pointer;
  transition: 0.2s;
}

.calculator__body__buttons button:hover {
  background: #ddd;
}

.calculator__body__buttons .clear {
  grid-column: span 1;
  background: #f44336;
  color: white;
}

.calculator__body__buttons .clear:hover {
  background: #e53935;
}

.calculator__body__buttons .equal {
  grid-column: span 1;
  background: #4caf50;
  color: white;
}

.calculator__body__buttons .equal:hover {
  background: #43a047;
}
</style>