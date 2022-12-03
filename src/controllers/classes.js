
class ClassController {

  constructor(repository) {
    this.repository = repository;
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.delete = this.delete.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
  }

  async create(req, res) {
    const { matter, teacher_id, school_id } = req.body;

    const classe = await this.repository.create({ matter, teacher_id, school_id });

    return res.status(201).json(classe)
  }

  async update(req, res) {
    const { id } = req.params;
    const { matter, teacher_id, school_id } = req.body;

    const classe = await this.repository.get(id);

    if (!classe) {
      return res.status(404).json({ message: "Turma não encontrada" })
    }

    const classeUpdated = await this.repository.update({ id, matter, teacher_id, school_id });

    return res.status(202).json(classeUpdated)
  }

  async delete(req, res) {
    const { id } = req.params;

    const school = await this.repository.delete(id);

    if (!school) {
      return res.status(404).json({ message: "Turma não encontrada" })
    }

    return res.status(202).json({})
  }

  async getById(req, res) {
    const { id } = req.params;

    const school = await this.repository.get(id);

    if (!school) {
      return res.status(404).json({ message: "Turma não encontrada" })
    }

    return res.status(202).json(school)
  }

  async get(req, res) {
    const schools = await this.repository.select();

    return res.status(202).json(schools)
  }



}

module.exports = ClassController;