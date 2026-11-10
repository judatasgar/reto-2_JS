const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20 },
  { id: 2, nombre: 'Juan', edad: 22 },
  { id: 3, nombre: 'María', edad: 21 },
];

function buscarEstudiantePorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const estudiante = estudiantes.find((e) => e.id === id);
      if (estudiante) resolve(estudiante);
      else reject("Estudiante no encontrado");
    }, 500);
  });
}

buscarEstudiantePorId(1)
  .then((estudiante) => console.log(estudiante))
  .catch((error) => console.log(error));
