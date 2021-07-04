import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import DesktopMenuWrapper from '@components/organisms/DesktopMenuWrapper';
import {useMediaQuery} from 'react-responsive';
import Card from '@components/organisms/Card';
import Text from '@components/atoms/Text';
import Emoji from '@components/atoms/Emoji';

const LoanStatus = () => {
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});

  const installments = [
    {
      date: '07 jan. 2021',
      cost: '104,79',
      paid: true,
    },
    {
      date: '07 fév. 2021',
      cost: '104,79',
      paid: true,
    },
    {
      date: '07 mar. 2021',
      cost: '104,79',
      paid: false,
    },
    {
      date: '07 avr. 2021',
      cost: '104,79',
      paid: false,
    },
  ];
  const renderContent = () => (
    <View style={styles.contentContainer}>
      <Card>
        <View style={{alignItems: 'center'}}>
          <Emoji name="moneybag" emojiStyle={{fontSize: 30}} />
          <Text type="l" bold>
            Mon prêt
          </Text>
          <Text type="m" style={{marginTop: 20, textAlign: 'center'}}>
            400€ pendant 4 mois
          </Text>
        </View>
        <View style={styles.installmentsView}>
          {installments.map(item => {
            return (
              <View style={styles.installmentsRow}>
                <Text type="m">{item.date}</Text>
                <View style={styles.row}>
                  <Text type="m" bold>
                    {item.cost}€
                  </Text>
                  {item.paid ? <View style={styles.greenDot} /> : null}
                </View>
              </View>
            );
          })}
        </View>
      </Card>
    </View>
  );

  return (
    <View style={styles.container}>
      {Platform.OS === 'web' && !isMobile ? (
        <DesktopMenuWrapper>{renderContent()}</DesktopMenuWrapper>
      ) : (
        renderContent()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Platform.OS === 'web' ? '100vh' : '100%',
    backgroundColor: '#FFF',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  installmentsView: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  installmentsRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#79BF86',
    marginLeft: 10,
  },
});

export default LoanStatus;
