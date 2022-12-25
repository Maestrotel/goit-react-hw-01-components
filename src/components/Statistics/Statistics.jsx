import data from '../../data/data.json';

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />

export const Statistics = () => {
  return (
    <>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {data.map(st => (
            <li key={st.id} className="item">
              <span className="label">{st.label}</span>
              <span className="percentage">{st.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

// export const Statistics = ({ data }) => {
//   return (
//     <>
//       <section className="statistics">
//         <h2 className="title">Upload stats</h2>

//         {data.map(({ id, label, percentage }) => {
//           return (
//             <ul className="stat-list">
//               <li key={id} className="item">
//                 <span className="label">{label}</span>
//                 <span className="percentage">{percentage}%</span>
//               </li>
//             </ul>
//           );
//         })}
//       </section>
//     </>
//   );
// };
