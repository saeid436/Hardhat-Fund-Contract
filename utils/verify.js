const { run } = require("hardhat")

async function verify(contractAddress, args) {
    console.log("Verifying Contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("ALready Verified...")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
