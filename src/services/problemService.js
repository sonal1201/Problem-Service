// const  {markdownSanitizer}  = require("../utils");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository
    }

    async createProblem(problemData) {

        problemData.description = sanitizeMarkdownContent(problemData.description);
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getProblem(id) {

        const problem = await this.problemRepository.getProblem(id);
        return problem;

    }

    async getAllproblems() {

        const problems = await this.problemRepository.getAllproblems();

        return problems;

    }

    async deleteProblem(id) {
        const deleteProblem = await this.problemRepository.deleteProblem(id);
        return deleteProblem;
    }

    async updateProblem(id, updateproblem) {
        updateproblem.description = sanitizeMarkdownContent(updateproblem.description);
        const update_Problem = await this.problemRepository.updateProblem(id, updateproblem);

        return update_Problem;
    }

}

module.exports = ProblemService