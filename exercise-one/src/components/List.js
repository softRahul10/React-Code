import styleObject from './List.module.css';
import Card from './UI/Card';
function List({value}) {
      return (
            <Card>
                  <ul className={styleObject['output-list']}>
                        {value.map((obj,index)=>{
                              return <li key={index}> {obj.name} ({obj.age} years old) </li>
                        })}
                  </ul>
            </Card>
      );
}

export default List;