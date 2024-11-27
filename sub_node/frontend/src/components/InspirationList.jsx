function InspirationList({ inspirations }) {
    return (
      <ul>
        {inspirations.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>: {item.description}
          </li>
        ))}
      </ul>
    );
  }
  
  export default InspirationList;
  