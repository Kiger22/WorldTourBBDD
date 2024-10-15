const Team = require("../models/Team.model");
const mongoose = require('mongoose');

// GET 
const getTeam = async (req, res, next) => {
  try {
    const teams = await Team.find().populate("ciclistas");
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido al obtener los Teams");
  }
};

// GET by ID 
const getTeamById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id).populate("ciclistas");
    return res.status(200).json(team);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener el team con id: " + id);
  }
}

// GET by Name
const getTeamByName = async (req, res, next) => {
  try {
    const { nombre } = req.params;
    const team = await Team.findOne({ nombre }).populate("ciclistas");
    return res.status(200).json(team);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener el team con nombre: " + nombre);
  }
}

// GET by Location
const getTeamByLocation = async (req, res, next) => {
  try {
    const { país } = req.params;
    const teams = await Team.find({ país }).populate("ciclistas");
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener los teams en la ubicación: " + pais);
  }
}

// GET by Ranking
const getTeamByRanking = async (req, res, next) => {
  try {
    const { rankingUCI } = req.params;
    const teams = await Team.find({ rankingUCI }).populate("ciclistas");
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener los teams con ranking: " + rankingUCI);
  }
}

// POST  
const postTeam = async (req, res, next) => {
  try {
    const newTeam = new Team(req.body);
    const teamSaved = await newTeam.save();
    return res.status(201).json(teamSaved);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al crear un nuevo team");
  }
}

// PUT by ID
//?  Opción 1 Map()
/* const putTeam = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Obtener equipo viejo
    const oldTeam = await Team.findById(id).populate("ciclistas");
    if (!oldTeam) {
      return res.status(404).json("Equipo no encontrado");
    }

    const newTeam = new Team(req.body);
    newTeam._id = id;

    // Combinar ciclistas del equipo viejo y nuevo
    const combinedCiclistas = [
      ...(oldTeam.ciclistas || []),
      ...(newTeam.ciclistas || [])
    ];

    // Usar Map para evitar duplicados
    const cyclistMap = new Map();

    combinedCiclistas.forEach(cyclist => {
      // Asegurarse de que el ID esté presente y sea de tipo string
      if (cyclist.id) {
        const cyclistId = String(cyclist.id);  // Convertir el ID a string para evitar problemas con tipos de datos
        //console.log("Añadiendo ciclista con ID:", cyclistId);  // Depuración
        cyclistMap.set(cyclistId, cyclist);  // Sobrescribe duplicados
      } else {
        console.log("Ciclista sin ID encontrado:", cyclist);  // Depuración
      }
    });

    // Convertir el Map a un array de ciclistas únicos
    newTeam.ciclistas = Array.from(cyclistMap.values());

    //console.log("Ciclistas:", newTeam.ciclistas);  // Verificar los ciclistas únicos

    // Actualizar equipo
    const updatedTeam = await Team.findByIdAndUpdate(id, newTeam, { new: true });
    if (!updatedTeam) {
      return res.status(404).json("Equipo no encontrado o no se pudo actualizar");
    }
    console.log("Equipo actualizado:", updatedTeam.ciclistas);  // Verificar el equipo actualizado
    return res.status(200).json(updatedTeam);
  } catch (error) {
    //console.error("Error:", error);  // Depuración del error
    return res.status(400).json("Algo ha ocurrido un error al actualizar el equipo con id: " + id);
  }
}; */

//?  Opción 2 Set()
/* const putTeam = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Obtener equipo viejo
    const oldTeam = await Team.findById(id).populate("ciclistas");
    if (!oldTeam) {
      return res.status(404).json("Equipo no encontrado");
    }

    const newTeam = new Team(req.body);
    newTeam._id = id;

    // Combinar ciclistas del equipo viejo y nuevo, eliminando duplicados
    const uniqueCiclistas = Array.from(new Set([
      ...(oldTeam.ciclistas || []),
      ...(newTeam.ciclistas || [])
    ].map(cyclist => cyclist.id ? String(cyclist.id) : null)))
      .filter(id => id !== null)
      .map(id => {
        const cyclist = [...oldTeam.ciclistas, ...newTeam.ciclistas].find(c => String(c.id) === id);
        return cyclist;
      });

    // Asignar ciclistas únicos al nuevo equipo
    newTeam.ciclistas = uniqueCiclistas;

    // Actualizar equipo
    const updatedTeam = await Team.findByIdAndUpdate(id, newTeam, { new: true });
    if (!updatedTeam) {
      return res.status(404).json("Equipo no encontrado o no se pudo actualizar");
    }
    console.log("Equipo actualizado:", updatedTeam.ciclistas);  // Verificar el equipo actualizado
    return res.status(200).json(updatedTeam);
  }
  catch (error) {
    console.error("Error:", error);  // Depuración del error
    return res.status(400).json("Ha ocurrido un error al actualizar el equipo con id: " + id);
  }
}; */

//?  Opción 3  .reduce():
/* const putTeam = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Verificar si el equipo existe
    const oldTeam = await Team.findById(id).populate("ciclistas");
    if (!oldTeam) {
      return res.status(404).json("Equipo no encontrado");
    }

    const newTeam = new Team(req.body);
    newTeam._id = id;

    // Combina ciclistas y evita duplicados, asegurando que ambos arrays existen
    const combinedCiclistas = [
      ...(oldTeam.ciclistas || []),
      ...(newTeam.ciclistas || [])
    ];

    // Eliminar ciclistas duplicados por id
    const uniqueCiclistas = combinedCiclistas.reduce((acc, cyclist) => {
      if (!acc.some(c => String(c.id) === String(cyclist.id))) {
        acc.push(cyclist);
      }
      return acc;
    }, []);


    newTeam.ciclistas = uniqueCiclistas;

    // Actualizar el equipo
    const updatedTeam = await Team.findByIdAndUpdate(id, newTeam, { new: true });
    if (!updatedTeam) {
      return res.status(404).json("Equipo no encontrado");
    }

    return res.status(200).json(updatedTeam);
  } catch (error) {
    console.error(error); // Para ver más detalles del error
    return res.status(400).json("Algo ha ocurrido un error al actualizar el equipo con id: " + id);
  }
}; */

//?  Opción 4 otra manera de usar Set()
/* const putTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);

    // Primero, obtener el equipo actual
    const oldTeam = await Team.findById(id).populate("ciclistas");
    if (!oldTeam) {
      return res.status(404).json({ message: "Equipo no encontrado" });
    }
    console.log(oldTeam);

    // Preparar los datos actualizados
    const newTeam = { ...req.body };
    console.log(newTeam);

    // Manejar la actualización de ciclistas
    if (newTeam.ciclistas && Array.isArray(newTeam.ciclistas)) {
      // Convertir todos los IDs a strings para comparación consistente
      const oldCiclistasIds = oldTeam.ciclistas.map(c => c.toString());
      const newCiclistasIds = newTeam.ciclistas.map(c => c.toString());

      // Combinar ciclistas existentes y nuevos, eliminando duplicados
      const uniqueCiclistasIds = [...new Set([...oldCiclistasIds, ...newCiclistasIds])];
      newTeam.ciclistas = uniqueCiclistasIds;
    }
    console.log(newTeam.ciclistas);

    // Actualizar el equipo
    const updatedTeam = await Team.findByIdAndUpdate(
      id,
      {
        $set: { ...newTeam },
        $addToSet: { ciclistas: { $each: newTeam.ciclistas || [] } }
      },
      { new: true }
    ).populate("ciclistas");
    console.log(updatedTeam);
    return res.status(200).json(updatedTeam);
  }
  catch (error) {
    console.error("Error al actualizar el equipo:", error);
    return res.status(400).json({ message: `Error al actualizar el equipo con id: ${req.params.id}`, error: error.message });
  }
}; */

//?  Opción 5 
const putTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("ID del equipo a actualizar:", id);

    // Primero, obtener el equipo actual
    const oldTeam = await Team.findById(id).populate("ciclistas");
    if (!oldTeam) {
      return res.status(404).json({ message: "Equipo no encontrado" });
    }
    console.log("Equipo original:", oldTeam);

    // Preparar los datos actualizados
    const newTeam = { ...req.body };
    console.log("Nuevos datos del equipo:", newTeam);

    // Manejar la actualización de ciclistas
    if (newTeam.ciclistas && Array.isArray(newTeam.ciclistas)) {
      // Convertir todos los IDs a strings para comparación consistente
      const oldCiclistasIds = oldTeam.ciclistas.map(c => c.toString());
      const newCiclistasIds = newTeam.ciclistas.map(c => c.toString());

      // Combinar ciclistas existentes y nuevos, eliminando duplicados
      const uniqueCiclistasIds = [...new Set([...oldCiclistasIds, ...newCiclistasIds])];
      newTeam.ciclistas = uniqueCiclistasIds.map(id => new mongoose.Types.ObjectId(id));
    }
    console.log("Ciclistas actualizados:", newTeam.ciclistas);

    // Separar la actualización en dos pasos
    // Paso 1: Actualizar todos los campos excepto ciclistas
    const ciclistasToUpdate = newTeam.ciclistas;
    delete newTeam.ciclistas;

    await Team.updateOne({ _id: id }, { $set: newTeam });

    // Paso 2: Actualizar el campo ciclistas
    const updatedTeam = await Team.findByIdAndUpdate(
      { _id: id },
      { $addToSet: { ciclistas: { $each: ciclistasToUpdate || [] } } },
      { new: true }
    );

    console.log("Equipo actualizado:", updatedTeam);
    return res.status(200).json(updatedTeam);
  }
  catch (error) {
    console.error("Error al actualizar el equipo:", error);
    return res.status(400).json({ message: `Error al actualizar el equipo con id: ${req.params.id}`, error: error.message });
  }
};

// DELETE by ID
const deleteTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTeam = await Team.findByIdAndDelete(id);
    return res.status(200).json(deletedTeam);
  } catch (error) {
    return res.status(400).json("Error al eliminar el team con id: " + id);
  }
}

module.exports = {
  getTeam,
  getTeamById,
  getTeamByName,
  getTeamByLocation,
  getTeamByRanking,
  postTeam,
  putTeam,
  deleteTeam
};