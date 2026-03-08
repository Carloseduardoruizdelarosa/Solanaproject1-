# Todo List en Solana

## Descripción

Este proyecto es un *smart contract* desarrollado en la blockchain de Solana utilizando Anchor.
El programa permite crear y gestionar una lista de tareas (Todo List) donde los usuarios pueden crear, completar y eliminar tareas.

El objetivo del proyecto es demostrar cómo almacenar y manejar datos en la blockchain usando cuentas de Solana.

---

# Características

* Crear una tarea nueva
* Marcar una tarea como completada
* Eliminar una tarea
* Guardar datos directamente en la blockchain
* Uso del framework Anchor para simplificar el desarrollo

---

# Tecnologías utilizadas

* Blockchain: Solana
* Framework: Anchor Framework
* Entorno de desarrollo: Solana Playground
* Lenguaje del programa: Rust
* Lenguaje del cliente y tests: TypeScript

---

# Estructura del proyecto


solana-todo
│
├── programs
│   └── todo_list
│       └── src
│           └── lib.rs
│
├── tests
│   └── todo_list.ts
│
├── client
│   └── client.ts
│
└── README.md


---

# Funcionamiento del programa

El programa maneja una cuenta llamada *Task* que almacena la información de cada tarea.

### Estructura de la cuenta

* authority → dirección de la wallet del dueño de la tarea
* content → descripción de la tarea
* completed → estado de la tarea (completada o no)

---

# Instrucciones del programa

## 1. Crear tarea

Crea una nueva tarea en la blockchain.

Parámetros:

* contenido de la tarea

Resultado:

* se crea una cuenta con la tarea guardada

---

## 2. Completar tarea

Marca la tarea como completada.

Resultado:

* el campo completed cambia a true

---

## 3. Eliminar tarea

Elimina la tarea y devuelve la renta al usuario.

---

# Instalación y uso

### 1. Clonar el repositorio


git clone https://github.com/tuusuario/solana-todo.git
cd solana-todo


### 2. Compilar el programa


anchor build


### 3. Ejecutar tests


anchor test


### 4. Ejecutar el cliente


ts-node client/client.ts


---

# Ejemplo de uso

1. El usuario crea una tarea.
2. La tarea se guarda en una cuenta en la blockchain.
3. El usuario puede actualizar el estado de la tarea.
4. La tarea puede eliminarse cuando ya no se necesite.

---

# Objetivo del proyecto

Este proyecto sirve como ejemplo educativo para aprender:

* Desarrollo de smart contracts en Solana
* Uso del framework Anchor
* Manejo de cuentas en la blockchain
* Interacción con contratos mediante TypeScript
