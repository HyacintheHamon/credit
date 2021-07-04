import React from 'react';
import {Image, Platform, StyleProp, ViewStyle} from 'react-native';
//import {createUseStyles} from '@utils/createUseStyles';

interface Props {
  width?: any;
  height?: any;
  name: string;
  //@ts-ignore
  //style?: StyleProp<ViewStyle>;
}

export type StylesContext = {};

const SVGLocalLoader: React.FC<Props> = props => {
  const {width, height, name} = props;

  //const useStyles = createUseStyles(getStyles);

  //const styles = useStyles({}, style);

  const allPaths = {
    btnMenu: require('@assets/icons/btn-menu.svg').default,
    btnMenuActive: require('@assets/icons/btn-menu-active.svg').default,
    tabBg: require('@assets/icons/tab-bg.svg').default,

    axaBanque: require('@assets/icons/axa-banque.svg').default,
    banquePopulaire: require('@assets/icons/banque-populaire.svg').default,
    bnpParibas: require('@assets/icons/bpn-paribas.svg').default,
    banqueBcp: require('@assets/icons/banque-bcp.svg').default,
    banqueCourtois: require('@assets/icons/banque-courtois.svg').default,
    banqueKolb: require('@assets/icons/banque-kolb.svg').default,
    banqueLaydernier: require('@assets/icons/banque-laydernier.svg').default,
    banqueNuger: require('@assets/icons/banque-nuger.svg').default,
    banquePouyanne: require('@assets/icons/banque-pouyanne.svg').default,
    banqueRhoneAlpes: require('@assets/icons/banque-rhone-alpes.svg').default,
    banqueTarneaud: require('@assets/icons/banque-tarneaud.svg').default,
    bForBank: require('@assets/icons/bforbank.svg').default,
    boursorama: require('@assets/icons/boursorama.svg').default,
    bred: require('@assets/icons/bred.svg').default,
    cic: require('@assets/icons/cic.svg').default,
    banquePostale: require('@assets/icons/banque-postale.svg').default,
    caisseEpargne: require('@assets/icons/caisse-epargne.svg').default,
    compteNickel: require('@assets/icons/compte-nickel.svg').default,
    creditAgricole: require('@assets/icons/credit-agricole.svg').default,
    creditCooperatif: require('@assets/icons/credit-cooperatif.svg').default,
    creditDuNord: require('@assets/icons/credit-du-nord.svg').default,
    creditMaritime: require('@assets/icons/credit-maritime.svg').default,
    creditMutuel: require('@assets/icons/credit-mutuel.svg').default,
    creditMutuelBretagne: require('@assets/icons/credit-mutuel-bretagne.svg')
      .default,
    creditMutuelSudOuest: require('@assets/icons/credit-mutuel-sud-ouest.svg')
      .default,
    fortuneo: require('@assets/icons/fortuneo.svg').default,
    hsbc: require('@assets/icons/hsbc.svg').default,
    ingDirect: require('@assets/icons/ing-direct.svg').default,
    lcl: require('@assets/icons/lcl.svg').default,
    macif: require('@assets/icons/macif.svg').default,
    milleis: require('@assets/icons/milleis.svg').default,
    monabanq: require('@assets/icons/monabanq.svg').default,
    n26: require('@assets/icons/n26.svg').default,
    qonto: require('@assets/icons/qonto.svg').default,
    revolut: require('@assets/icons/revolut.svg').default,
    shine: require('@assets/icons/shine.svg').default,
    societeGenerale: require('@assets/icons/societe-generale.svg').default,
    societeMarseillaiseDeCredit:
      require('@assets/icons/societe-marseillaise-de-credit.svg').default,

    education: require('@assets/icons/education.svg').default,
    profesionalTraining: require('@assets/icons/profesional-training.svg')
      .default,
    profesionalSpend: require('@assets/icons/profesional-spend.svg').default,
    drivingLicense: require('@assets/icons/driving-license.svg').default,
    housework: require('@assets/icons/housework.svg').default,
    carRepair: require('@assets/icons/car-repair.svg').default,
    hightech: require('@assets/icons/hightech.svg').default,
    travel: require('@assets/icons/travel.svg').default,

    idCard: require('@assets/icons/id-card.svg').default,
    frenchPassport: require('@assets/icons/french-passport.svg').default,
    europeanIdCard: require('@assets/icons/european-id-card.svg').default,
    europeanPassport: require('@assets/icons/european-passport.svg').default,
    residencePermit: require('@assets/icons/residence-permit.svg').default,
    passportAndVisa: require('@assets/icons/passport-and-visa.svg').default,
  };

  //@ts-ignore
  const MyComponent = allPaths[name];

  return Platform.OS === 'web' ? (
    <Image
      style={{
        width: width ? width : '100%',
        height: height ? height : '100%',
        resizeMode: 'contain',
      }}
      source={MyComponent}
    />
  ) : (
    <MyComponent width={width} height={height} />
  );
};

export const getStyles = (
  context?: StylesContext,
  style?: StyleProp<ViewStyle>,
): StyleProp<ViewStyle> => [
  {
    width: '100%',
    height: '100%',
  },
  style,
];

export default SVGLocalLoader;
