import { pool } from '../db/db.js';

export const getUser = async (req, res) => {

  try {

    const [rows] = await pool.query('SELECT * FROM node.user')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message: 'Fallo del servidor '
    })
  }
}

export const getOneUSer = async (req, res) => {

  try {
    const [rows] = await pool.query('SELECT * FROM user'
      + ' where id = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
      message: 'usuario no encontrado'
    })
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message: 'Fallo del servidor'
    })
  }
}

export const createUser = async (req, res) => {

  try {
    const { email, password } = req.body

    const [rows] = await pool.query('INSERT INTO node.user (email, password) Values(?, ?)', [email, password])

    res.send({
      id: rows.insertId,
      email,
      password
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Fallo del servidor'
    })
  }
}

export const eliminarUser = async (req, res) => {
  
  try {
    const [result] = await pool.query('DELETE FROM node.user WHERE id =?', [req.params.id])

    if (result.length <= 0) return res.status(404).json({
      message: 'usuario no encontrado'
    })
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({
      message: 'Fallo del servidor'
    })
  }
}

export const actualizarUser = async (req, res) => {

  try {
    const { id } = req.params
    const { email, password } = req.body
    const [result] = await pool.query('UPDATE node.user SET email = IFNULL(?, email) , password = IFNULL(?, password) WHERE id = ?',
      [email, password, id])

    if (result.length <= 0) return res.status(404).json({
      message: 'usuario no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM node.user WHERE id =? ', [id])

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message: 'Fallo del servidor'
    })
  }
}


