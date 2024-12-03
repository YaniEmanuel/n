
document.getElementById("connectWallet").addEventListener("click", async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            await ethereum.request({ method: "eth_requestAccounts" });
            alert("Wallet connected!");
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    } else {
        alert("Please install MetaMask to use this feature.");
    }
});

document.querySelectorAll(".buyButton").forEach(button => {
    button.addEventListener("click", async (event) => {
        const price = event.target.getAttribute("data-price");
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                const transaction = {
                    to: "0xYourWalletAddressHere", // Replace with your wallet address
                    value: ethers.utils.parseEther(price).toHexString()
                };
                await ethereum.request({ method: "eth_sendTransaction", params: [transaction] });
                alert(`Purchase successful! You bought a chest for ${price} ETH.`);
            } catch (error) {
                console.error("Transaction failed:", error);
                alert("Transaction failed or was rejected.");
            }
        } else {
            alert("Please install MetaMask to proceed.");
        }
    });
});
