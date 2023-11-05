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
          {items.map((item, i) => {
            return (
              <tr style={{ backgroundColor: getBgLine(i) }} key={item.id}>
                <TransItemTabl>{item.type}</TransItemTabl>
                <TransItemTabl>{item.amount}</TransItemTabl>
                <TransItemTabl>{item.currency}</TransItemTabl>
              </tr>
            );
          })}
        </tbody>
      </TransTable>
    </>
  );
};
