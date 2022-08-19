const executeFishy = async () => {
  // By way of example, we will use Dogecoin, which has `coin_type` 3.
  const node = await wallet.request({
    method: 'snap_getBip44Entropy_3',
  });
  console.log('node', node);
  return node;


  // Next, we'll create an address key deriver function for the Dogecoin coin_type node.
  // In this case, its path will be: m / 44' / 3' / 0' / 0 / address_index
  // const deriveDogecoinAddress = await getBIP44AddressKeyDeriver(node);
  // console.log('deriveDogecoinAddress', deriveDogecoinAddress);

  // // These are Node.js Buffer representations of the extended private keys for
  // // the respective addresses.

  // // m / 44' / 3' / 0' / 0 / 0
  // const addressKey0 = deriveDogecoinAddress(0);

  // // m / 44' / 3' / 0' / 0 / 1
  // const addressKey1 = deriveDogecoinAddress(1);

  // console.log(addressKey0, addressKey1);
};

// Now, you can ask the user to e.g. sign transactions!
wallet.registerRpcMessageHandler(async (_, requestObject) => {
  switch (requestObject.method) {
    case 'hello':
      console.log(requestObject.params);
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: 'Welcome tp Cypherock X1',
            description:
              'This is the snap integration for Cypherock X1 hardware wallet',
            textAreaContent: `This is a test message to verify the installation of Cypherock X1 snap.`,
          },
        ],
      });
    case 'fishy':
      return executeFishy();
    default:
      throw new Error('Method not found.');
  }
});
