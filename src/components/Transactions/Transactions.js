import { TransCard, TransList, TransItem } from './Transactions.stuled';

export const Transactions = ({ items }) => {
  return (
    <>
      <TransCard key={items.id}>
        <TransCard>
          <TransList>
            <TransItem>TYPE</TransItem>
            <TransItem>AMOUNT</TransItem>
            <TransItem>CURRENCY</TransItem>
          </TransList>
        </TransCard>
        {items.map(item => {
          return (
            <tr>
              <TransItem>{item.type}</TransItem>
              <TransItem>{item.amount}</TransItem>
              <TransItem>{item.currency}</TransItem>
            </tr>
          );
        })}
      </TransCard>
    </>
  );
};
