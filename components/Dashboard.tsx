import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Dashboard = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <div>
      <h1
        className={`${
          darkMode ? "text-slate-200" : "text-slate-600"
        } text-3xl font-bold`}
      >
        Dashboard
      </h1>
      <p className={`${darkMode ? "text-white" : "text-black"}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil
        odio vitae exercitationem iste totam veritatis commodi aliquid saepe,
        sed unde error dolor, repudiandae, temporibus cum id? Fugiat, dolores
        culpa nam quibusdam amet quam dicta id est molestias quo voluptates
        fugit cum veniam natus distinctio. Laboriosam incidunt ab est neque
        eaque impedit explicabo voluptatibus nam temporibus vel, ipsum error
        natus aperiam consequatur enim? Exercitationem, amet pariatur! Eos at
        commodi voluptates quibusdam, placeat rerum nesciunt numquam deleniti?
        Ullam nulla eaque numquam maiores quo. Laborum at dignissimos iusto
        quidem deleniti mollitia error laboriosam asperiores dolorem rerum.
        Quidem asperiores enim dolores, veritatis deserunt autem? Deserunt illo
        iure amet sit nihil vitae beatae laudantium aut, distinctio soluta minus
        deleniti hic non odio esse aliquam repellendus. Assumenda ut totam,
        doloremque vel quasi possimus saepe, aspernatur atque magnam corporis
        numquam eveniet reprehenderit odio tempora! Ut veniam vero debitis
        ratione animi fuga reiciendis facilis laboriosam possimus est molestiae
        quod, nihil aliquam sunt voluptate consequatur eaque ad corrupti nulla
        deserunt ipsa? Deleniti repellat esse tenetur maiores. Non dolores
        doloremque fugit sequi laudantium eius repellendus aspernatur nihil
        alias reprehenderit esse accusamus magni iure distinctio harum ullam
        amet quaerat vitae, dicta labore quia ea? Dolorem aliquid suscipit, amet
        sapiente provident consectetur quas, molestiae reprehenderit itaque
        optio sint cum saepe, sequi soluta error accusamus officiis labore?
        Accusantium exercitationem iusto asperiores accusamus dicta officiis
        quis itaque, nesciunt error, non animi impedit laborum veritatis
        repellat saepe eum, alias repudiandae. Dolorum esse cumque veritatis,
        dolore officiis eius ipsam ipsa dicta ab nisi, a sit sapiente aperiam
        beatae ex nihil maiores perferendis est necessitatibus. Voluptate illo
        veniam molestiae ut illum obcaecati sapiente iste neque maxime, at
        possimus quo, maiores nisi exercitationem. Quaerat minima nisi
        repellendus temporibus exercitationem asperiores ipsa voluptatibus
        beatae cum. Repellendus consequuntur reiciendis aperiam, iure possimus
        fugiat provident veritatis soluta sequi nesciunt ipsa, officia deleniti
        ipsum iste explicabo totam culpa, ut molestias! Facere distinctio
        architecto, odit dolorum sint minima labore ut repellat explicabo, dicta
        quasi sit quia laborum laboriosam aperiam praesentium excepturi optio.
        Quia perferendis deleniti, voluptatibus aperiam nulla voluptas
        accusantium itaque placeat iusto vitae! Perspiciatis maxime rem
        adipisci, quod omnis deserunt, sint iure quibusdam, molestias ullam
        maiores? Eum voluptatem rerum sequi repellendus, facilis sed assumenda.
        Assumenda sunt unde doloremque repudiandae possimus odit! Tempore
        laudantium amet illum qui incidunt. Repellat quod perspiciatis
        inventore, blanditiis quia maxime aut vel voluptatem corporis nihil
        commodi laborum, beatae alias incidunt minus omnis porro, ipsam quae
        quasi veritatis officia ipsa. Culpa nostrum dicta quis, unde officiis at
        modi, ut veritatis mollitia laborum soluta magni? Assumenda asperiores
        sequi doloremque? At sapiente nobis laboriosam velit, provident
        voluptatum cumque unde dolorem, sint accusamus eius. Dignissimos aliquid
        odit deserunt consequatur obcaecati id, ut porro velit vel, magnam ipsum
        maxime assumenda distinctio minus libero culpa repellat voluptatem
        dolorem. Fugiat veniam id sequi, eius ducimus, error repellat voluptatum
        minus quaerat quis a nemo ipsum quisquam deserunt! Quod rem expedita
        recusandae corporis, repellendus, iste veritatis esse maiores assumenda
        reprehenderit magni iusto architecto laboriosam quia temporibus? Nobis
        laudantium quia aliquam harum molestias doloribus, velit magnam nisi
        pariatur animi, suscipit quas ex architecto neque, beatae odio vero
        fugit labore repellat? Sit repellat eum consequatur aperiam laudantium
        rerum neque, minus laborum! Dolore quasi velit, quisquam voluptatum
        similique nesciunt aliquam laboriosam atque culpa beatae dolores
        sapiente qui ullam voluptas nam facere possimus dolorum commodi deleniti
        hic pariatur explicabo assumenda veritatis temporibus. Excepturi, quasi
        perferendis. Ullam fugit quia eaque veritatis inventore fuga magnam
        maxime recusandae, culpa quae libero corrupti nihil corporis aut in
        placeat fugiat at deleniti quasi porro dolorum aliquam debitis, ducimus
        possimus? Placeat blanditiis ipsam repudiandae fugiat error eum, fugit
        provident sint minus autem numquam dolores eius quas libero, dolore
        dolorum suscipit itaque dolor repellat asperiores! Ullam non inventore
        quasi ab sunt explicabo consectetur harum omnis fugiat dolorum! Optio
        odio dolorem reprehenderit maiores ipsa possimus officia. Id nobis
        veritatis eos adipisci reiciendis suscipit pariatur, distinctio ipsum
        aspernatur? Reiciendis aspernatur in odit rerum, vel dolor rem vero nisi
        quod qui. At omnis dolorem, harum ea accusamus vitae nemo id reiciendis
        animi, ex beatae cupiditate autem in repudiandae similique molestias,
        quibusdam nisi doloribus expedita. Aspernatur numquam fugit non
        veritatis quo laboriosam, cupiditate, ducimus a eveniet velit labore
        dolor iure molestias. Omnis earum ullam nobis fuga laudantium esse
        minima ipsa quos est unde dolorum quasi debitis nemo praesentium velit
        ad cum harum error eius sapiente molestiae, reiciendis incidunt facilis.
        Corrupti facere laboriosam, aperiam dolor dolorum deserunt magni
        perspiciatis, voluptate earum dolorem voluptatum labore. Officia
        obcaecati, eligendi sit quibusdam deleniti dolorum distinctio aliquam
        ipsam quis? Architecto, repellat cumque. Non eos enim sapiente suscipit,
        deleniti minima. Dolorum totam at cupiditate alias ratione fugiat.
        Temporibus, ut nihil ad tempora at consequatur libero totam enim
        laboriosam, voluptate distinctio obcaecati eaque nostrum voluptates
        eligendi tempore, saepe corporis? Deleniti quos veniam ab deserunt, sed
        voluptatibus nam eveniet, labore blanditiis voluptatem odio, vero
        repellendus soluta doloremque quasi dignissimos facilis inventore.
        Inventore omnis pariatur iste consequuntur, deleniti maxime tenetur
        vitae minima sapiente blanditiis, veniam accusantium ab! Ratione
        laudantium neque aliquam nobis dolores, eos praesentium ea odit
        reiciendis voluptate velit aperiam, sint provident ad eaque porro at
        beatae dolor repellendus officiis quibusdam, debitis tempore. Pariatur
        maxime molestias itaque deleniti ut corrupti repudiandae fugiat
        recusandae fugit exercitationem, iusto, cum eveniet sed ullam, maiores
        adipisci inventore ducimus? Error iure blanditiis nam quo quis fugiat
        sequi accusantium necessitatibus inventore perspiciatis omnis quasi
        cupiditate, corrupti illo officiis expedita nemo ullam. Vitae quibusdam,
        enim voluptate ut, amet aut dolorum sunt tempore distinctio pariatur
        rerum quas libero nulla, quaerat vero ad cumque facere consequatur
        explicabo non? Deserunt, consectetur. Ipsa eaque dolores error. Eligendi
        ea rerum ab incidunt aspernatur fugit sed quis neque laudantium magnam!
        Accusantium, minus possimus? Dolorem voluptatem magnam similique iusto
        nulla, et, quia quos nemo corporis repudiandae provident. Numquam
        assumenda laudantium nulla repellendus nobis consequatur fuga eligendi
        error excepturi, aliquid tenetur dolore placeat corrupti ipsam sit
        impedit? Sunt dolorum ad eaque nesciunt dolores, ipsam quasi, voluptatem
        laudantium architecto in maiores fugit modi maxime porro. Quasi
        similique quidem molestiae voluptas alias, earum temporibus repudiandae
        quaerat cupiditate delectus accusamus minus dolore laborum. Ducimus iste
        beatae incidunt obcaecati culpa officia at tempora animi sint error
        quidem dolores inventore praesentium, asperiores libero deserunt
        nesciunt nobis nostrum totam atque. Officia maxime doloribus, deleniti
        ab quam, id aspernatur, consectetur repellendus excepturi ea numquam
        nemo sit molestiae quia voluptatum? Perferendis quas veritatis amet
        nihil debitis nulla aut necessitatibus! Omnis ipsa eaque repudiandae
        sequi doloremque pariatur nesciunt repellat rerum mollitia, nam, soluta
        voluptate voluptatum impedit recusandae! Ea eligendi atque provident
        dignissimos, eum quo minima dolorem at quos inventore incidunt ipsum
        recusandae vel eos quibusdam architecto soluta perferendis dolorum minus
        perspiciatis illum quae? Velit maiores temporibus asperiores harum
        recusandae excepturi sequi saepe ea rerum ullam, veritatis maxime
        voluptatem doloribus et dolores suscipit magni culpa fugit ipsum quos
        laudantium nihil deserunt reprehenderit ducimus! Incidunt veritatis
        consectetur, beatae cupiditate aliquam repellat sed et iste veniam
        perferendis, explicabo suscipit quos minima consequatur. Consequatur
        quidem debitis unde officia eligendi quisquam. Exercitationem maxime
        ullam praesentium, facere temporibus ab, aperiam dolorum est unde sit
        quisquam doloremque fuga, beatae necessitatibus ea ratione laboriosam
        dolores animi! Vel sint laboriosam dolorum, ex saepe at fugit debitis
        minus beatae eum quo repudiandae, similique, odio praesentium quisquam
        quia accusantium atque tempora consequatur sequi dolores? Neque ea
        praesentium aperiam odit perspiciatis sed iure aliquam deleniti
        assumenda rem alias nulla similique, molestiae modi facilis quo!
        Veritatis a dicta quisquam quos porro molestiae aliquid rerum fuga id
        error itaque dolorum ut quidem officia, voluptatem doloremque libero.
        Rem quisquam sit delectus maiores soluta quaerat nihil autem deserunt
        consequatur possimus excepturi impedit quia consequuntur eligendi ea
        deleniti, temporibus magnam reprehenderit? Ab aliquid quas placeat
        deleniti consequatur voluptatem eaque officia est corporis facilis?
        Libero sed odit dignissimos tempore hic, at itaque velit eaque atque
        magni consequatur architecto pariatur quo in similique, eum laboriosam
        molestias blanditiis commodi suscipit fugiat. Illum molestiae doloremque
        numquam! In sapiente similique ullam beatae amet consequatur! Nulla quod
        consectetur ut mollitia nam architecto sequi officiis veritatis eaque
        molestias repellat esse modi eum odit, est officia non soluta. Quaerat,
        id? Porro, dicta! Eaque doloribus maxime facilis autem, alias error unde
        voluptate iusto quam dolorum atque saepe quos assumenda recusandae minus
        ullam at, magnam magni exercitationem temporibus esse ipsum deserunt?
        Minima ipsa blanditiis, accusantium aperiam temporibus quidem eum
        repellendus ab vel corrupti commodi, ex illo. Doloremque animi quidem
        tempore enim dignissimos? Iusto iste accusantium odio dignissimos
        accusamus ex, repudiandae illo perferendis vel itaque nesciunt eos
        numquam cupiditate, impedit officia ipsam aperiam provident sunt nam at
        esse fugit obcaecati quam. Nisi facilis velit placeat, praesentium vitae
        et quibusdam, culpa sequi autem corrupti laborum. Accusamus non nihil
        minima veritatis suscipit eveniet ipsa a. Nemo iusto cum consectetur rem
        aliquam quo corrupti ipsum neque impedit. Dolorem laboriosam incidunt,
        aperiam alias accusamus id at et dolor deleniti ratione nesciunt eaque!
        Officiis eaque libero reiciendis obcaecati mollitia facere, doloribus
        nihil. Doloremque adipisci eum quas eaque culpa dignissimos aut
        voluptatem sit quibusdam iusto possimus fugiat omnis quis reiciendis,
        quasi labore incidunt dolorum, nihil laudantium minus. Atque asperiores
        quos hic expedita voluptatibus non beatae minima libero accusantium! In
        esse perferendis rerum neque excepturi, rem facilis harum at fugit! Esse
        quae saepe illum provident aperiam perspiciatis aspernatur, soluta
        debitis vel ipsum velit excepturi, quisquam, voluptatibus eveniet?
        Sapiente repudiandae praesentium nobis magnam sunt. Veniam maiores earum
        inventore illo voluptates nam temporibus vero. Quae quos reprehenderit
        animi molestiae, blanditiis sapiente nisi quibusdam eligendi distinctio,
        nemo dolor rem quis nulla! Dolorum sunt ipsa unde quasi. Neque quidem
        earum architecto recusandae tenetur delectus aliquid eveniet laudantium
        quaerat laborum quos sit optio nemo sed excepturi aperiam, porro
        repellat odio minima ipsum! Veritatis nesciunt velit, et magni
        voluptates odio recusandae qui id mollitia eum eligendi omnis nulla
        aperiam doloremque soluta quod ut labore atque minus voluptas, rem neque
        repellat quaerat? Maxime impedit praesentium, rem vero consectetur
        perspiciatis natus alias quas facere dicta neque. Reprehenderit cum
        commodi corrupti. Minus soluta possimus nam hic, dolore harum quas amet
        magni quidem debitis facere distinctio dolorum tempora praesentium,
        explicabo eum incidunt nisi. Quis, esse minus labore tenetur architecto
        at adipisci possimus dolores, suscipit eius ad voluptas nesciunt
        placeat, illo nisi autem laudantium sapiente nam explicabo vero! Quasi
        hic recusandae saepe perferendis ipsa exercitationem fugit iste veniam
        dolor neque ex corrupti iure sint quaerat in amet soluta laborum ut a
        ratione, nisi aut! Eius quam veniam impedit adipisci maiores nesciunt
        exercitationem in consequatur ipsa quo officia atque, delectus odit
        corrupti amet deserunt ducimus natus voluptas illum, aliquam ullam
        pariatur libero. Explicabo, ullam odit atque, nulla totam, voluptas
        dolores dignissimos sed obcaecati officia deserunt asperiores dolore.
        Praesentium nemo fugiat ipsam necessitatibus dicta ea? Consequatur at
        fuga dignissimos dicta accusamus illum provident repudiandae id,
        accusantium reiciendis nihil veritatis error tempora sit, a ducimus quam
        facilis nesciunt nisi distinctio eos. Eos corporis incidunt doloribus
        deleniti velit ratione deserunt sequi praesentium nemo soluta illo,
        placeat recusandae ipsa, iusto quis aperiam. Voluptas non expedita, ea
        id alias, eius nihil possimus deleniti sequi quas suscipit. Sit atque
        quaerat pariatur sunt, veritatis assumenda velit ducimus porro
        laboriosam vel totam distinctio eum, blanditiis laudantium. Sed, veniam
        ratione nam rem nihil eligendi dolores ad molestiae quam inventore iusto
        at dolor ex sapiente eaque dicta quaerat omnis facere. Asperiores nisi
        nihil rem veritatis porro accusamus consectetur maxime quibusdam
        consequuntur ipsa, illo soluta excepturi architecto placeat fugit,
        necessitatibus ipsam perspiciatis dolorem? Ratione consequuntur,
        delectus incidunt id libero similique cumque distinctio voluptatum ipsum
        veritatis fuga nihil ad placeat quae nisi esse saepe quia excepturi at
        quod illum corporis doloribus non ipsa! Voluptatibus autem perspiciatis
        reprehenderit ipsa officia animi voluptatem dolorem, veniam ex minus eum
        corporis assumenda omnis, dicta ut laudantium possimus dolores quas
        ipsam magni quam aliquam tempora eaque. Sunt, adipisci quasi! Iusto a
        voluptatem laborum dignissimos impedit dolores quam obcaecati dicta
        sunt. Atque dignissimos, sequi illo aperiam reprehenderit, quasi natus
        totam impedit quas deleniti eum inventore dolorum, praesentium
        perferendis et? Distinctio dicta sapiente, quis aliquam facilis dolore,
        assumenda dolores obcaecati ab natus libero omnis quo maiores
        perferendis nostrum fugit quisquam laudantium eaque incidunt nulla
        adipisci cupiditate accusantium vero! Laboriosam, perferendis
        temporibus. Provident quia molestias optio a sunt similique numquam
        officia, maxime non veritatis error tempore fugiat ipsam beatae ab
        voluptatem, mollitia animi hic? Tempora, repellat. Accusamus atque id
        porro repudiandae dolorum, soluta sit maxime error repellendus suscipit
        quas quibusdam nostrum fugit dignissimos consequatur quisquam, ut
        laborum ea. Nihil, quo omnis officiis atque soluta exercitationem
        eveniet vitae eaque molestiae modi fugiat at id a cum dicta fuga
        quibusdam labore nisi dolor. Sint at obcaecati velit accusantium a eos
        est! Id placeat nisi in aliquid quis ipsum alias nam, nulla harum.
        Iusto, quaerat reprehenderit? Suscipit eveniet nesciunt praesentium
        sapiente hic non corporis possimus inventore deserunt qui iste, ducimus
        magni aperiam omnis quae. Quisquam, in quo ab fugit nostrum ullam saepe,
        neque eum ipsa ex praesentium, distinctio necessitatibus dolorem culpa
        officiis aut! Cumque modi perferendis dicta odit, reiciendis fugit
        labore iure vel accusantium recusandae, reprehenderit doloremque nulla,
        repellendus odio omnis fuga inventore eveniet natus? Pariatur laboriosam
        itaque a explicabo odit aut voluptatibus modi? Sapiente, accusantium
        dolor id provident laboriosam assumenda blanditiis maxime dolore! Eum
        consectetur enim reprehenderit facilis corporis explicabo inventore
        error, quibusdam velit blanditiis at harum alias non cupiditate quo
        autem impedit sequi unde laudantium ab accusamus eligendi. Dolor quia
        beatae nulla, illum quam cum architecto necessitatibus laborum animi
        porro nisi temporibus dolore veniam dolores corporis a veritatis
        repellendus amet iure! Esse illo saepe vel commodi sunt veniam, quo aut
        eligendi itaque deleniti mollitia, tenetur aliquam voluptatum rerum odio
        quasi nemo sapiente? Hic repudiandae atque est voluptatibus corrupti
        ipsum corporis, fugiat nulla voluptate reprehenderit velit pariatur
        itaque odio! Vero, ab. Cupiditate vero obcaecati laboriosam neque, id
        aspernatur, doloremque rem qui, voluptatibus sed minus. Totam cupiditate
        eos est, ipsa assumenda eligendi inventore expedita explicabo culpa
        repellendus pariatur delectus reiciendis architecto praesentium
        veritatis, blanditiis molestias. Quas labore temporibus sapiente
        accusamus veritatis laudantium optio vel. Enim, nobis. Veniam porro
        numquam sapiente ut quae dolores labore, aperiam vel inventore, vitae
        incidunt obcaecati dignissimos odio accusantium quas? Dolor consequuntur
        eos quia molestiae quis officia asperiores omnis officiis sit nulla
        aperiam, harum non quo, minus neque corrupti. Aliquid, tenetur saepe,
        quae esse voluptatibus ducimus, repellendus fugiat dicta ullam itaque
        perspiciatis. Obcaecati, nihil ipsa a qui vitae molestias, ullam eveniet
        reprehenderit inventore minima est facere cum nostrum culpa delectus non
        consequuntur maiores vel reiciendis commodi sit repellendus quia optio
        amet. Obcaecati omnis quo consequuntur? Totam, neque minima asperiores
        esse maiores velit in deserunt. Aperiam nostrum dolores nam modi esse
        laboriosam alias blanditiis, odio, facere quia quisquam nesciunt omnis
        aliquid similique animi quasi ipsum dignissimos? Laudantium quasi,
        voluptates quia consequatur earum quam! Nam maiores optio a, beatae
        aliquam fugiat molestias, exercitationem sint quibusdam facere ad?
        Possimus cum illum ex molestiae dignissimos dolorum velit, id porro
        inventore ab. Nihil velit nemo eos mollitia, adipisci magni obcaecati.
        Nulla iusto, nisi modi ex veritatis debitis distinctio, accusantium,
        doloribus officiis labore cumque ratione exercitationem unde corrupti
        minima adipisci? Tempora labore laboriosam quo, repellat maxime incidunt
        repudiandae quod porro doloremque. Architecto necessitatibus illum atque
        iusto totam delectus obcaecati, maxime exercitationem! Repudiandae aut
        sunt doloribus molestiae illo odit possimus deserunt quidem illum
        tenetur nesciunt quae officiis laborum similique, qui ratione laudantium
        voluptatibus, excepturi hic. Et ut vero recusandae, quod sit deleniti
        maxime nostrum accusamus quidem eligendi iste doloribus nihil autem
        suscipit id tempora saepe. Autem dolores dicta fuga? Facere commodi
        laudantium, quam natus fugit vel veritatis quod libero eius sint eum,
        doloremque optio quo aperiam magni consequuntur suscipit sapiente, sunt
        fuga provident? Illum, beatae earum sed ex corrupti numquam culpa ipsam
        quam ducimus labore dolorum deserunt hic dolore sit molestias quasi
        pariatur, eligendi voluptate, fugiat placeat? Voluptatem, enim
        excepturi. Soluta dolore amet corrupti distinctio minus beatae dicta ex,
        maxime, facere quaerat eos explicabo voluptatem? Ab dicta iste
        consequatur quaerat quidem fuga architecto beatae molestiae corrupti
        placeat reprehenderit corporis sint veritatis possimus iure ratione,
        iusto doloremque earum incidunt, accusantium ipsa. Ab porro esse ut a
        molestiae corrupti rerum at veniam adipisci, quo delectus tenetur natus
        vel quasi ducimus ratione nemo saepe temporibus officia obcaecati
        similique fuga aperiam architecto. Dignissimos, error maiores delectus,
        culpa iure quos fuga aspernatur rem quaerat sequi qui vel atque esse
        cumque nobis facilis praesentium quidem nisi rerum, ab blanditiis quod
        vitae aliquam ipsam! Dolorum quos voluptates aliquam laudantium facilis
        eveniet qui eaque consectetur, alias est error molestias, optio ducimus
        cupiditate magni voluptatem beatae sequi tempora, quia repellendus quod
        quis saepe asperiores amet. Sint id eum rerum perspiciatis maiores
        tempora. Ducimus sit dolores dicta aspernatur officiis dolore,
        laudantium commodi eius voluptates sed voluptate repellat qui. Cumque
        magni aliquam recusandae reiciendis natus quas in perspiciatis
        perferendis suscipit! Ipsum quisquam voluptate saepe excepturi, ab sint
        unde omnis impedit perspiciatis officia debitis quod consequatur soluta
        nulla fugit, consectetur minima expedita amet voluptas veritatis et
        numquam velit rem! Eos officia unde accusantium eaque porro odio atque
        repellendus veritatis dolorum illo adipisci ea est sunt aliquid, commodi
        explicabo repellat vero. Aliquid amet consequatur natus, nulla
        recusandae voluptas culpa, voluptate obcaecati debitis, asperiores
        repellendus ipsa harum ab rem deserunt sint provident tempora quidem
        soluta ad fugit? Nobis sit accusantium animi quod labore, cupiditate
        officiis quaerat fuga reprehenderit omnis dolorum quibusdam doloremque
        magnam cum iusto possimus, doloribus at. Modi fugit earum ad sit
        doloribus consequuntur architecto repudiandae vel, quisquam rerum esse.
        Necessitatibus doloribus labore nisi possimus voluptatibus voluptates
        in. Assumenda molestias atque repellat repellendus nihil. Illum, ex
        modi. Perspiciatis aspernatur similique earum velit eius harum,
        laboriosam cupiditate quasi iure veniam beatae dolore ducimus vero
        impedit, suscipit, sint quas debitis ipsa! Aliquid, a suscipit officia
        numquam, porro veniam inventore dignissimos adipisci soluta vero
        placeat. Ullam iure consequatur pariatur, vel saepe omnis debitis id
        impedit! Nam iste pariatur ea possimus id labore voluptatum minus
        numquam perspiciatis, dolore dolorum, beatae debitis iure doloremque
        quis, praesentium incidunt. Ex voluptatem perferendis repudiandae
        quisquam qui maiores dolore eveniet accusamus impedit sed deleniti
        magnam delectus quae quas a dolor iure inventore sint sapiente,
        doloremque odit temporibus vel minus debitis. Ea quibusdam quis tempora,
        qui quas laudantium nihil quae placeat nesciunt eligendi itaque ipsum
        ullam perspiciatis recusandae commodi laborum modi enim explicabo minus
        architecto exercitationem assumenda vitae dolores error. Totam
        laboriosam molestias reiciendis ratione dolorum, itaque, fugiat, porro
        optio vitae eius dolor labore voluptatem earum nisi harum autem?
      </p>
    </div>
  );
};

export default Dashboard;
