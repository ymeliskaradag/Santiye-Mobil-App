import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';

const ReportsScreen = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;

  const barData = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
    datasets: [
      {
        data: [12000, 15000, 13000, 17000, 14000],
      },
    ],
  };

  const pieData = [
    { name: 'Stok A', population: 40, color: '#ffcc00', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Stok B', population: 25, color: '#185a9d', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Stok C', population: 20, color: '#43cea2', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Stok D', population: 15, color: '#e6b800', legendFontColor: '#333', legendFontSize: 12 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Raporlar</Text>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Aylık Gelir</Text>
        <BarChart
          data={barData}
          width={screenWidth * 0.9}
          height={220}
          chartConfig={{
            backgroundColor: '#43cea2',
            backgroundGradientFrom: '#43cea2',
            backgroundGradientTo: '#185a9d',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Stok Dağılımı</Text>
        <PieChart
          data={pieData}
          width={screenWidth * 0.9}
          height={220}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          style={styles.chart}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Dashboard'a Git</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#185a9d',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    fontWeight: '700',
  },
  chart: {
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#43cea2',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReportsScreen;