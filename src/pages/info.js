import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styles from './info.module.css'
import FloatingBtn from '../components/FloatingBtn'
import OrderBtn from '../components/OrderBtn'
const InfoPage = props => (
  <Layout>
    <div className={styles.generalWrap}>
      <h1 style={{ textAlign: 'center' }}>
        Produkcijos informacija ir naudojimas
      </h1>
      <div className={styles.generalInfo}>
        <div className={styles.generalDescription}>
          <div className={styles.description}>
            <h4>Aprašymas</h4>
            <p>
              Doktor Animals - tai naudingų bakterijų kultūrų ir augalinių
              ekstraktų mišinys.
            </p>
            <p>
              Tai preparatas, skirtas stiprinti imunitetą ir pagerinti mūsų
              augintinių medžiagų apykaitą. Sausu maistu maitinami gyvūnai turi
              problemų, susijusių su maisto medžiagų įsisavinimu. Jie dažnai
              kenčia nuo virškinamojo trakto ligų, kurios turi įtakos imuniteto
              silpnėjimui, kūno dangos išvaizdai ir bendrai būklei. Tai
              pašaruose esančių konservantų poveikis. Be to, toks pašaras,
              dažniausiai termiškai apdorotas, yra sterilus. Sisteminis
              probiotinių mikroorganizmų, esančių Doktor Animals, naudojimas
              aprūpina organizmą naudinga mikroflora, dalyvauja medžiagų
              apykaitos procesuose ir veiksmingai šalina patogenines bakterijas.
            </p>
          </div>
          <div className={styles.productPlaceholder}>
            <Img
              fluid={props.data.imageProduct.childImageSharp.fluid}
              className={styles.imgStylingProduct}
            />
          </div>

          <div className={styles.effects}>
            <h4>Doktor Animals naudojimo efektas:</h4>
            <ul className={styles.listStyle}>
              <li>Pagerėjusi odos išvaizda ir blizgantis kailis</li>
              <li>Virškinimo procesų pagėrėjimas</li>
              <li>
                Imuniteto, fizinės būklės ir fiziologinių funkcijų pagėrėjimas
              </li>
              <li>Mikozės ir odos ligų atsiradimo sumažėjimas</li>
              <li>Greičiau gyja žaizdos ir įdrėskimai</li>
              <li>Pašalina kvėpavimo takų ligų šaltinių atsiradimą</li>
              <li>Sumažina uždegiminių būklių atsiradimą</li>
              <li>Sausina ir dezinfekuoja patalpas</li>
              <li>Šalina kvapus, kovoja su patogeniniais mikroorganizmais</li>
            </ul>
          </div>
          <div className={styles.content}>
            <h4>Sudėtis</h4>
            <p>
              Švarus nechloruotas vanduo, cukranendrių melasa, pieno rūgšties
              bakterijos, mielės, natūrali acto rūgštis, etanolis, augalų
              ekstraktai.
            </p>

            <h4>Kultūros</h4>
            <p>
              Lactobacillus casei (ATTC PTA 6135), Enterococcus faecium (NCIMB
              10415, DSM 10663), Bacillus subtilis (C-3102, DSM 15544).
            </p>

            <h4>Ekologija ir GMO</h4>
            <p>
              Produktas yra nekenksmingas aplinkai ir nėra genetiškai
              modifikuotas. 100% ekologinis produktas.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.animalDescWrap}>
        {/* CAT SECTION BEGINS */}
        <h1>Katės</h1>
        <div className={styles.animalDesc}>
          <div className={styles.animalDetail}>
            <h4>Naudojimas</h4>
            <ul className={styles.listStyle}>
              <li>
                Gėrimui (kasdien): 5 ml Doktor Animals ištirpinama 100 ml
                vandens.
              </li>
              <li>
                Papildas pašarui (kasdien): sausą maistą suvilgome 5 proc.
                preparato Doktor Animals
              </li>
              <li>
                Sugirdymas į burną (pvz., švirkšto pagalba): - kačiukai: iki 1
                ml/vnt., rekomentuojama sugirdyti Doktor Animals į burną iškart
                po gimimo; - suaugusios katės: 1-2 ml į burną arba į maistą.
              </li>
              <li>
                Gyvūnui sergant, po gydymo antibiotikais ar žindančioms katėms
                rekomenduojama skirti dvigubą dozę.
              </li>
            </ul>
            <h4>Kvapų sumažinimas (Higienizacija)</h4>
            <p>
              Purškiame gyvūnų buvimo vietas Doktor Animals tirpalu su
              nechloruotu vandeniu, santykiu 1:10 (1 dalis preparato, 9 dalims
              vandens). 1 litras šio tirpalo yra sunaudojimas apie 20
              kvadratinių metrų paviršiaus išpurskimui. Pirmą savaitę purškiama
              kas tris dienas; sekančias savaites purškiama kas 7-10 dienų.
            </p>
          </div>
          <div className={styles.imgPlaceholder}>
            <Img
              fluid={props.data.imageCat.childImageSharp.fluid}
              className={styles.imgStyling}
            />
          </div>
        </div>
        {/* DOG SECTION BEGINS */}
        <h1>Šunys</h1>
        <div className={styles.animalDesc}>
          <div className={styles.animalDetail}>
            <h4>Naudojimas</h4>
            <p>
              Preparatas naudojamas kasdien, tiesiogiai į burną arba pridedant į
              maistą:
            </p>
            <ul className={styles.listStyle}>
              <li>
                Suaugę šunys (svoris): iki 5 kg - 5 ml, 5-15 kg - 10 ml virš 15
                kg - 20 ml.
              </li>
              <li>Šuniukai – 1 ml</li>
              <li>
                Rekomenduojama sugirdyti keletą preparato lašų į burną iškart po
                gimimo.
              </li>
            </ul>
            <h4>Kvapų sumažinimas (Higienizacija)</h4>
            <p>
              Purškiame gyvūnų buvimo vietas Doktor Animals tirpalu su
              nechloruotu vandeniu, santykiu 1:10 (1 dalis preparato, 9 dalims
              vandens). 1 litras šio tirpalo yra sunaudojimas apie 20
              kvadratinių metrų paviršiaus išpurskimui. Pirmą savaitę purškiama
              kas tris dienas; sekančias savaites purškiama kas 7-10 dienų.
            </p>
          </div>
          <div className={styles.imgPlaceholder}>
            <Img
              fluid={props.data.imageDog.childImageSharp.fluid}
              className={styles.imgStyling}
            />
          </div>
        </div>
        {/* RABBIT SECTION BEGINS */}
        <h1>Triušiai</h1>
        <div className={styles.animalDesc}>
          <div className={styles.animalDetail}>
            <h4>Naudojimas</h4>
            <p>
              Gėrimui (kasdien): 2 ml Doktor Animals ištirpinama 100 ml vandens
              (arba apipurkšti pašarą preparatu).
            </p>
            <h4>Kvapų sumažinimas (Higienizacija)</h4>
            <p>
              Purškiame gyvūnų buvimo vietas Doktor Animals tirpalu su
              nechloruotu vandeniu, santykiu 1:20 (1 dalis preparato, 19 dalims
              vandens). Purškiama kas septynios dienos.
            </p>
          </div>
          <div className={styles.imgPlaceholder}>
            <Img
              fluid={props.data.imageRabbit.childImageSharp.fluid}
              className={styles.imgStyling}
            />
          </div>
        </div>
        {/* PARROT SECTION BEGINS */}
        <h1>Papūgos ir kiti dekoratyviniai paukščiai</h1>
        <div className={styles.animalDesc}>
          <div className={styles.animalDetail}>
            <h4>Naudojimas</h4>
            <p>
              Pašarą papildantis mišinys gyvųjų pieno rūgšties bakterijų ir
              žolių ekstraktų pagrindu, duodamas gyvūnams derinant su vandeniu
              arba grūdais.
            </p>
            <ul className={styles.listStyle}>
              <li>Leidžia išvengti skrandžio ir virškinamojo trakto ligų</li>
              <li>Žymiai pagerina pašaro įsisavinimą</li>
              <li>Padidina bendrą paukščių organizmo atsparumą ir būklę</li>
              <li>Apriboja gydymą vaistais auginant</li>
            </ul>
            <p>
              Kasdien įlašinti į vandenį po vieną lašą preparato vienam
              paukščiui, o 3 kartus per savaitę apšlakstyti pašarą vandeniniu
              tirpalu proporcija 1:10.
            </p>
          </div>
          <div className={styles.imgPlaceholder}>
            <Img
              fluid={props.data.imageParrot.childImageSharp.fluid}
              className={styles.imgStyling}
            />
          </div>
        </div>
      </div>
      <OrderBtn />
    </div>
    <FloatingBtn />
  </Layout>
)

export const pageQuery = graphql`
  query {
    imageProduct: file(relativePath: { eq: "product.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageCat: file(relativePath: { eq: "cat-big.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageDog: file(relativePath: { eq: "dog-big.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageParrot: file(relativePath: { eq: "parrot-big.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageRabbit: file(relativePath: { eq: "rabbit-big.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default InfoPage
