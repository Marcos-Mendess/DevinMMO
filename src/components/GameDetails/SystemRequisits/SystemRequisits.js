import { RequisitStyle } from "./SystemRequisitsStyles";

function SystemRequisits() {
  return (
    <RequisitStyle>
      <h1>Requisitos de sistema</h1>
      <div> 
        <p> Sistema Operacional: <span> Dado da api</span> </p>
      </div>
      <div> 
        <p> Processador: <span> Dado da api</span> </p>
      </div><div> 
        <p> Memória: <span> Dado da api</span> </p>
      </div><div> 
        <p> Gráficos: <span> Dado da api</span> </p>
      </div>
      <div> 
        <p>Espaço em disco: <span> Dado da api</span> </p>
      </div>
    </RequisitStyle>
  );
}

export default SystemRequisits;
