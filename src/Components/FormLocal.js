import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);
  const [contador, setContador] = useState(0);

  const saveName = (name) => {
    localStorage.setItem("nameUser", name);
    alert("name guardado com sucesso");
    setNome("");
  };
  const getName = () => {
    alert(localStorage.getItem("nameUser"));
  };

  const saveTask = () => {
    const listTask = JSON.stringify(listaTarefa);
    localStorage.setItem("task", listTask);
  };

  const showTask = () => {
    const taskLocalStorege = localStorage.getItem("task");
    if (taskLocalStorege) {
      const showTask = JSON.parse(taskLocalStorege);
      setListaTarefa(showTask);
    }
  };

  useEffect(() => {
    showTask();
  }, []);

  const showConter = () => {
    const counterLocalStorege = localStorage.getItem("conter");
    if (counterLocalStorege) {
      const showCounter = JSON.parse(counterLocalStorege);
      setContador(showCounter);
    }
};

const saveCounter = () => {
    const listCounter = JSON.stringify(contador);
    setContador(contador + 1);
    localStorage.setItem("conter", listCounter);
  };

  useEffect(() => {
    showConter();
    
  }, []);

  return (
    <Form>
      <h3>Prática 1</h3>
      <label htmlFor="nome">
        nome:
        <input
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
          name="nome"
          id="nome"
        />
      </label>
      <div>
        <button onClick={() => saveName(nome)}>Guardar Dados</button>
        <button onClick={() => getName()}>Acessar Dados</button>
      </div>
      <br />
      <h3>Prática 2</h3>
      <label htmlFor="tarefa">
        tarefa:
        <input
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => setListaTarefa([...listaTarefa, tarefa])}
      >
        adicionar Tarefa
      </button>
      <ul>
        {listaTarefa.map((task, indice) => {
          return <li key={indice}>{task}</li>;
        })}
      </ul>
      <div>
        <button onClick={saveTask}>Guardar tarefa</button>
        <button onClick={showTask}>Acessar tarefa</button>
      </div>
      {nome}
      <br></br>
      <div>
        <button onClick={saveCounter}>adicionar contador</button>
        <div>{contador}</div>
      </div>
    </Form>
  );
}
