const { network } = require("hardhat")
const {
    developmentChains,
    DECIMAL,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config")
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if (developmentChains.includes(network.name)) {
        log("Local network detected!! \nDeploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMAL, INITIAL_ANSWER],
        })
        log("Mock deployed!!!!")
        log("-----------------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
