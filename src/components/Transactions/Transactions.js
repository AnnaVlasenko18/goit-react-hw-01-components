import {
  TransCard,
  TransList,
  TransItem,
  TransRow,
  TransTable,
} from './Transactions.stuled';

export const Transactions = ({ items }) => {
  return (
    <>
      <TransCard key={items.id}>
        <TransTable>
          <TransCard>
            <TransList>
              <TransItem>TYPE</TransItem>
              <TransItem>AMOUNT</TransItem>
              <TransItem>CURRENCY</TransItem>
            </TransList>
          </TransCard>

          {items.map((item, index) => {
            return (
              <TransRow even={index % 2 === 0} key={item.id}>
                <TransItem>{item.type}</TransItem>
                <TransItem>{item.amount}</TransItem>
                <TransItem>{item.currency}</TransItem>
              </TransRow>
            );
          })}
        </TransTable>
      </TransCard>
    </>
  );
};
