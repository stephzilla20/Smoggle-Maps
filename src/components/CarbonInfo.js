import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import calculateModesCarbonFootprint from "../calculators/ModesEmissionCalculator"
import calculateMakesCarbonFootPrint from "../calculators/MakesEmissionCalculator"

import calculateAudiCarbonFootPrint from "../calculators/models/AudiEmissionCalculator"
import calculateBMWCarbonFootPrint from "../calculators/models/BMWEmissionCalculator"
import calculateChevroletCarbonFootPrint from "../calculators/models/ChevroletEmissionCalculator"
import calculateHondaCarbonFootPrint from "../calculators/models/HondaEmissionCalculator"
import calculateHyundaiCarbonFootPrint from "../calculators/models/HyundaiEmissionCalculator"
import calculateMercedezBenzCarbonFootPrint from "../calculators/models/MercedezBenzEmissionCalculator"
import calculateNissanCarbonFootPrint from "../calculators/models/NissanEmissionCalculator"
import calculateToyotaCarbonFootPrint from "../calculators/models/ToyotaEmissionCalculator"
import calculateVolkswagenCarbonFootPrint from "../calculators/models/VolkswagenEmissionCalculator"

// @param depth: Depth 0-> modes, 1-> makes, 2-> models
// @param title: Either vehicle/make/model
// @param distance: KM travelled
export default function CarbonInfo({ depth, title, distance }) {
    let carbon = 0;
    switch(depth) {
        case 0:
            carbon = calculateModesCarbonFootprint(title, distance);
            break;
        case 1:
            carbon = calculateMakesCarbonFootPrint(title, distance);
            break;
        case 2:
            switch(title) {
                case "Audi":
                    carbon = calculateAudiCarbonFootPrint(title, distance);
                    break;
                case "BMW":
                    carbon = calculateBMWCarbonFootPrint(title, distance);
                    break;
                case "Chevrolet":
                    carbon = calculateChevroletCarbonFootPrint(title, distance);
                    break;
                case "Honda":
                    carbon = calculateHondaCarbonFootPrint(title, distance);
                    break;
                case "Hyundai":
                    carbon = calculateHyundaiCarbonFootPrint(title, distance);
                    break;
                case "MercedezBenz":
                    carbon = calculateMercedezBenzCarbonFootPrint(title, distance);
                    break;
                case "Nissan":
                    carbon = calculateNissanCarbonFootPrint(title, distance);
                    break;
                case "Toyota":
                    carbon = calculateToyotaCarbonFootPrint(title, distance);
                    break;
                case "Volkswagen":
                    carbon = calculateVolkswagenCarbonFootPrint(title, distance);
                    break;
            }
        break;
    }
    return (<View style={styles.outerView}>
        <View style={styles.innerView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtext}>{carbon.toFixed(2)} kg of CO2</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    outerView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    innerView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 2,
      padding: 22,
      backgroundColor: '#e4ebe5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    subtext: {
        fontSize: 22
    }
  });