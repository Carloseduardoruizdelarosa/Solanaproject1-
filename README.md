# Contador en Solana

## Descripción

Este proyecto es un *smart contract simple en Solana* que implementa un contador almacenado en la blockchain.
Permite *crear un contador e incrementarlo*, demostrando conceptos básicos del desarrollo en Solana como cuentas, transacciones y almacenamiento de datos.

El proyecto está desarrollado usando *Rust y Anchor*.

---

# Características

* Crear un contador en la blockchain
* Incrementar el valor del contador
* Almacenar datos en una cuenta de Solana
* Interactuar con el programa mediante cliente y tests

---

# Tecnologías utilizadas

* Rust
* Anchor Framework
* Solana Playground
* TypeScript (para tests y client)

---

# Estructura del proyecto

id="ks2eow"
project/
│
├─ programs/
│   └─ contador_solana/
│       └─ src/lib.rs
│
├─ tests/
│   └─ contador.ts
│
├─ client/
│   └─ client.ts
│
└─ README.md


---

# Funcionamiento del programa

El contrato contiene dos funciones principales:

### initialize

Crea una cuenta de contador en la blockchain con valor inicial *0*.

id="ms7p2j"
initialize()


---

### increment

Incrementa el valor del contador en *1*.

id="g5kbv4"
increment()


---

# Ejemplo de uso

1. Crear contador:

id="m6w7q5"
contador = 0


2. Incrementar:

id="38o1k3"
contador = 1


3. Incrementar nuevamente:

id="28b42n"
contador = 2


El valor se guarda permanentemente en la blockchain.

---

# Cómo ejecutar el proyecto

### 1. Abrir Solana Playground

Crear un nuevo proyecto Anchor.

---

### 2. Copiar el programa

Pegar el código en:

id="6orj0i"
lib.rs


---

### 3. Compilar el programa

id="hjw8ju"
Build


---

### 4. Desplegar el programa

id="87njbb"
Deploy


---

### 5. Ejecutar tests o cliente

Se puede interactuar con el contrato usando:

* tests en TypeScript
* cliente JavaScript/TypeScript

---

# Conceptos de Solana demostrados

Este proyecto demuestra:

* Programas (Smart Contracts)
* Cuentas en Solana
* Transacciones
* Interacción con cliente

---

# Posibles mejoras

* Reiniciar el contador
* Decrementar el contador
* Crear múltiples contadores
* Agregar control de acceso
* Crear interfaz web con React

---

# Autor

Proyecto educativo para aprender desarrollo en Solana usando Anchor.# Solanaproject1-
