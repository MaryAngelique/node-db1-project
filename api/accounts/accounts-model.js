const database = require("../../data/db-config");

const getAll = () => {
  return database("accounts");
}

async function getById(id) {
  const result = await database("accounts")
    .where("id", id).first()

  return result;
}

async function create(account) {
  const [id] = await database("accounts")
    .insert(account)

  return getById(id);
}

async function updateById(id, account) {
  await database("accounts")
    .where("id", id)
    .update(account)
  
  return getById(id);
}

async function deleteById(id) {
  const toDelete = await getById(id)
  await database("account")
    .where( { id } )
    .del()

  return toDelete;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
