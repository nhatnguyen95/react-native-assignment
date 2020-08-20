import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 14,
    padding: 5,
  },
  tripIdText: {
    alignSelf: "center",
    fontSize: 19,
    color: '#51bd8a',
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: '#51bd8a',
    borderWidth: 1,
  },
  textRow: {
    color: '#4a4a4a',
    fontSize: 17,
  }
});

export default styles;
