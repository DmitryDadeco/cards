import { getRandomInt } from '../../../src/utils/getRandomInt';

export default (req, res) => {
  res.status(200).json({ rowsCount: getRandomInt(3, 10) });
};
