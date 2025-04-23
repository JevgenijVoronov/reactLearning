import React, { useState } from 'react';

interface Operation {
  operand1: number;
  operand2: number;
  operator: '+' | '-' | '*' | '/';
}

const Calculator: React.FC = () => {
  const [operation, setOperation] = useState<Operation>({
    operand1: 0,
    operand2: 0,
    operator: '+',
  });
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const { operand1, operand2, operator } = operation;
    let res: number;
    switch (operator) {
      case '+':
        res = operand1 + operand2;
        break;
      case '-':
        res = operand1 - operand2;
        break;
      case '*':
        res = operand1 * operand2;
        break;
      case '/':
        res = operand2 !== 0 ? operand1 / operand2 : NaN;
        break;
      default:
        res = NaN;
    }
    setResult(res);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={operation.operand1}
        onChange={(e) => setOperation({ ...operation, operand1: +e.target.value })}
      />
      <select
        value={operation.operator}
        onChange={(e) => setOperation({ ...operation, operator: e.target.value as Operation['operator'] })}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={operation.operand2}
        onChange={(e) => setOperation({ ...operation, operand2: +e.target.value })}
      />
      <button onClick={calculate}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
};

export default Calculator;

-----------------------


import React from 'react';

interface Product {
  name: string;
  price: number;
  description: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const addToCart = () => {
    console.log(`Продукт ${product.name} добавлен в корзину`);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '300px' }}>
      <h2>{product.name}</h2>
      <p>Цена: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Добавить в корзину</button>
    </div>
  );
};

const App: React.FC = () => {
  const sampleProduct: Product = {
    name: 'Смартфон',
    price: 999,
    description: 'Современный смартфон с отличными характеристиками.',
  };

  return (
    <div>
      <h1>Каталог продуктов</h1>
      <ProductCard product={sampleProduct} />
    </div>
  );
};

export default App;