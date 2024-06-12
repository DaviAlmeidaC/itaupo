import logoImg from "../../assets/LOGO.png";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import "./styles.css";

export function Home () {
    
    return(
    <div>

            <div className="back">
                
                <Header />
                <h1 className="h1-titulo">Sistema de verificação e monitoramento <br />da integridade estrutural de barragens.</h1>
                
            </div>

        <div>
            <h1 className="h1-home">Você sabia que</h1>
            
            <div className="desastre">
                <p className="p1">No Brasil, há em média mais de três acidentes com barragens a cada ano. <br /> Os dados são compilados pela Agência Nacional de Águas (ANA), <br /> responsável pelo Relatório de Segurança de Barragens (RSB).</p>
                <img src="" alt="" />
            </div>

            <div>
                <p className="p2">Desde 2011, quando o primeiro relatório foi produzido, até 2017, a ANA registrou 24 acidentes. <br /> Contudo, o número real é maior: a própria agência reconhece que há acidentes não relatados e <br /> mesmo barragens que não foram informadas ao governo federal.</p>

            </div>
            
            <p className="fonte">Fonte: Relatório de Segurança de Barragens 2017, da Agência Nacional das Águas (ANA)</p>

            <div className="contexto">
                <h3>Dentro desse contexto </h3> 
                <h2>como trazer mais segurança a essas estruturas?</h2>

            </div>
       </div>

        <div className="trazer">
            <h3>E é exatamente isso que</h3>
            <h1>o nosso produto busca trazer!</h1> 
            <h2 className="h2-veri">Ele ira fazer verificação e monitoramento contínuo das barragens</h2>
            <h3>e também:</h3>
        </div>

        <div>
            <ul className="ul">
                <li className="li-esp">Realizar um estudo bibliográfico acerca do funcionamento de barragens;</li>
                <li className="li-esp">Verificar questões regulatórias envolvendo segurança de barragens;</li>
                <li className="li-esp">Mapeamento e calibração da aferição em tempo real dos sensores de monitoramento;</li>
                <li className="li-esp">Desenvolver um sistema SCADA (Sistema de Supervisão e Aquisição de Dados).</li>
                <li className="li-esp">Desenvolver uma comunicação de longa distância via tecnologia LoRa.</li>
            </ul>
        </div>

        <div className="trazer">
            <h1>E nos queremos</h1>
            <ul>
                <li>Diminuição de acidentes</li>
                <li>Auxilio nas inspeções regulares garantindo uma manutenção mais eficaz</li>
                <li>Maior segurança para as comunidades próximas</li>
            </ul>
        </div>

       
    
       
    </div>
    );
}

