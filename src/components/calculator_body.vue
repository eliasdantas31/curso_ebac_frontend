<script setup>
import { ref, computed } from "vue";

const num1 = ref(0);
const num2 = ref(0);
const operacao = ref("+");

const resultado = computed(() => {
  switch (operacao.value) {
    case "+":
      return num1.value + num2.value;
    case "-":
      return num1.value - num2.value;
    case "*":
      return num1.value * num2.value;
    case "/":
      return num2.value !== 0 ? (num1.value / num2.value).toFixed(2) : "Erro (divisão por zero)";
    default:
      return 0;
  }
});
</script>

<template>
  <div class="calculator__body">
    <h2>Calculadora</h2>
    <div class="inputs">
      <input type="number" v-model.number="num1" placeholder="Primeiro número" />
      <select v-model="operacao">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" v-model.number="num2" placeholder="Segundo número" />
    </div>
    <div class="resultado">
      <strong>Resultado:</strong> {{ resultado }}
    </div>
  </div>
</template>

<style scoped>
.calculator__body {
  width: max-content;
  margin: auto;
  font-family: Arial, sans-serif;
  background-color: #222;
  padding: 20px;
  border-radius: 8px;
  color: white;
  text-align: center;
}

.inputs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 15px;
}

input,
select {
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.resultado {
  background: #000;
  padding: 12px;
  border-radius: 6px;
  font-size: 20px;
}
</style>