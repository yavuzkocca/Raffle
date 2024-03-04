const axios = require('axios');
const { ethers } = require('hardhat');

async function fetchABI(explorerUrl, contractAddress) {
  try {
    const response = await axios.get(`${explorerUrl}api/v2/smart-contracts/${contractAddress}`);
    if (response.status === 200) {
      const abi = response.data.abi;
      return abi;
    } else {
      console.error(`Failed to fetch ABI, status code: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching ABI:', error);
    return null;
  }
}

function areAddressesEqual(address1, address2) {
  // Normalize addresses to checksummed format

  // const checksumAddress1 = ethers.utils.getAddress(address1);
  // const checksumAddress2 = ethers.utils.getAddress(address2);

  // Compare addresses
  const areEqual = address1 === address2;
  return areEqual;
}

module.exports = { fetchABI, areAddressesEqual };