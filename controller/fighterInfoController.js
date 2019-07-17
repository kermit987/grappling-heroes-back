const fighterInfoController = (req, res) => {
  res.status(200).send(
    {
      name: 'Craig Jones',
      birth: '17/07/1991'
    },
    {
      name: 'Gordon Ryan',
      birth: '08/07/1995'
    },
    {
      name: 'Joao Miyao',
      birth: '11/05/1991'
    },
    {
      name: 'Paulo Miyao',
      birth: '11/05/1991'
    }
  );
};

module.exports = {
  fighterInfoController
};
