export default function ExpenseUI(props) {

      const incrementHandler = () => {
            props.updateBalance({ type: 'Increment' });
      }
      const decrementHandler = () => {
            props.updateBalance({ type: 'Decrement' });
      }

      return (
            <section style={{ padding: '1rem 2rem', margin: '2rem auto', maxWidth: '600px' }} >
                  <h2>Current Balance : {props.currentBalance.money} </h2>
                  <div style={{ display: 'flex', justifyContent: 'center', gap:'1rem' }}>
                        <button onClick={incrementHandler}> Increment [+] </button>
                        <button onClick={decrementHandler}> Decrement [-]  </button>
                  </div>
            </section>
      );
}