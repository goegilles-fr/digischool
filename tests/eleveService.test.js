const eleveRepository = require("../src/repositories/eleveRepository");
const eleveService = require("../src/services/eleveService");

jest.mock("../src/repositories/eleveRepository");

describe("eleveService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should get all eleves", async () => {
    const eleves = [
      {
        id: '1',
        nom: "Doe",
        prenom: "John",
        classeId: '1',
        dateNaissance: "2020-01-01",
        adresse: "123 Main St",
        sexe: "M",
      },
      {
        id: '2',
        nom: "Doe",
        prenom: "Jane",
        classeId: '1',
        dateNaissance: "2020-01-01",
        adresse: "123 Main St",
        sexe: "F",
      },
    ];

    eleveRepository.getAllEleves.mockResolvedValueOnce(eleves);

    const results = await eleveService.getAllEleves();

    expect(results).toEqual(eleves);
    expect(eleveRepository.getAllEleves).toHaveBeenCalledTimes(1);
  });

  it("should find an eleve by id", async () => {
    const eleve = {
      id: '1',
      nom: "Doe",
      prenom: "John",
      classeId: '1',
      dateNaissance: "2020-01-01",
      adresse: "123 Main St",
      sexe: "M",
    };

    eleveRepository.getEleveById.mockResolvedValueOnce(eleve);

    const results = await eleveService.getEleveById('1');

    expect(results).toEqual(eleve);
    expect(eleveRepository.getEleveById).toHaveBeenCalledTimes(1);
    expect(eleveRepository.getEleveById).toHaveBeenCalledWith('1');
  });

  it("should create an eleve", async () => {
    const eleve = {
      id: '1',
      nom: "Doe",
      prenom: "John",
      classeId: '1',
      dateNaissance: "2020-01-01",
      adresse: "123 Main St",
      sexe: "M",
    };

    eleveRepository.createEleve.mockResolvedValueOnce(eleve);

    const results = await eleveService.createEleve(eleve);

    expect(results).toEqual(eleve);
    expect(eleveRepository.createEleve).toHaveBeenCalledTimes(1);
  });

  it("should update an eleve", async () => {
    const eleve = {
      id: '1',
      nom: "Doe",
      prenom: "John",
      classeId: '1',
      dateNaissance: "2020-01-01",
      adresse: "123 Main St",
      sexe: "M",
    };

    eleveRepository.updateEleve.mockResolvedValueOnce(eleve);

    const results = await eleveService.updateEleve('1', eleve);

    expect(results).toEqual(eleve);
    expect(eleveRepository.updateEleve).toHaveBeenCalledTimes(1);
    expect(eleveRepository.updateEleve).toHaveBeenCalledWith('1', eleve);
  });

  it("should delete an eleve", async () => {
    eleveRepository.deleteEleve.mockResolvedValueOnce(true);

    const results = await eleveService.deleteEleve('1');

    expect(results).toBe(true);
    expect(eleveRepository.deleteEleve).toHaveBeenCalledTimes(1);
    expect(eleveRepository.deleteEleve).toHaveBeenCalledWith('1');
  });
});
