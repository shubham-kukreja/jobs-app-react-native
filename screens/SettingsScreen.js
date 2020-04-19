import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import * as jobActions from '../store/actions/job_actions'


const SettingsScreen = (props) => {
  const dispatch = useDispatch();
  const onClear = async () => {
      await dispatch(jobActions.clearJobs());
      Alert.alert('ALL JOBS CLEARED')
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Clear All Jobs" onPress={onClear} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SettingsScreen;
