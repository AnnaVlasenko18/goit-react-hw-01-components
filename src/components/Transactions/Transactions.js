import { TransList, TransTable, TransItemTabl } from './Transactions.stuled';
import { getBgLine } from './Transactions.stuled';

export const Transactions = ({ items }) => {
  return (
    <>
      <TransTable>
        <thead>
          <TransList>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </TransList>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }, i) => {
            return (
              <tr style={{ backgroundColor: getBgLine(i) }} key={id}>
                <TransItemTabl>{type}</TransItemTabl>
                <TransItemTabl>{amount}</TransItemTabl>
                <TransItemTabl>{currency}</TransItemTabl>
              </tr>
            );
          })}
        </tbody>
      </TransTable>
    </>
  );
};
