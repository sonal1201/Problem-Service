const logger = require('../config/loggerConfig');
const notFoundError = require('../errors/NotFoundError');
const { Problem } = require('../models')

class problemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                difficulty: problemData.difficulty,
                testcase: (problemData.testcase) ? problemData.testcase : []
            })

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);

            if (!problem) {
                throw new notFoundError('Problem', id)
            }

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllproblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if (!deletedProblem) {
                logger.error(`Problem with id: ${id} Not Found in the Db`)
                throw new notFoundError("problem", id);
            }
            return deletedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id, updateProblem) {
        try {
            const update_Problem = await Problem.findByIdAndUpdate(id, updateProblem, { new: true });
            if (!update_Problem) {

                throw new notFoundError('Problem', id);
            }
            return update_Problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = problemRepository