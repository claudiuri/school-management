
class SchoolController {

  constructor(repository) {
    this.repository = repository;
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.delete = this.delete.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
  }

  async create(req, res) {
    const { name, cnpj, logo, address } = req.body;

    const schoool = await this.repository.create({ name, cnpj, logo, address });

    return res.status(201).json(schoool)
  }

  async delete(req, res) {
    const { id } = req.params;

    const school = await this.repository.delete(id);

    if (!school) {
      return res.status(404).json({ message: "Escola não encontrada" })
    }

    return res.status(202).json({})
  }

  async getById(req, res) {
    const { id } = req.params;

    const school = await this.repository.get(id);

    if (!school) {
      return res.status(404).json({ message: "Escola não encontrada" })
    }

    return res.status(202).json(school)
  }

  async get(req, res) {
    const schools = await this.repository.select();

    return res.status(202).json(schools)
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, cnpj, logo, address } = req.body;

    const school = await this.repository.get(id);

    if (!school) {
      return res.status(404).json({ message: "Escola não encontrada" })
    }

    const schoolUpdated = await this.repository.update({ id, name, cnpj, logo, address });

    return res.status(202).json(schoolUpdated)
  }

}

module.exports = SchoolController;