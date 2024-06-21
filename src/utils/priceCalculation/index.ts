import { activityLocations } from '@/data';
import { getMaxNumberOfDaysForChosenActivities } from '@/utils/date';
import {
  insuranceCosts,
  drivingCosts,
  accommodationCosts,
  foodCosts,
  technicalCosts,
  percentageForProfit,
} from '@/data/costsVacation';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { calculateDaysDifference } from '@/utils/date';

export const getNumberOfPerson = () => {
  const adults = useSelector((state: RootState) => state.vacation.adults);
  const children = useSelector((state: RootState) => state.vacation.children);
  return adults + children;
};

export const getNumberOfDay = () => {
  const startDate = useSelector((state: RootState) => state.vacation.startDate);
  const finishDate = useSelector((state: RootState) => state.vacation.finishDate);
  return calculateDaysDifference(startDate, finishDate);
};

export const getSummaryInsurancePrice = () => {
  const numberOfDays =
    getNumberOfDay() == 0 ? getMaxNumberOfDaysForChosenActivities() : getNumberOfDay();
  const numberOfPerson = getNumberOfPerson();

  console.log('numberOfDays', numberOfDays);

  return numberOfDays == 0
    ? getMaxNumberOfDaysForChosenActivities()
    : numberOfDays * numberOfPerson * insuranceCosts.perDay_perPerson;
};

export const getSummaryDrivingPrice = () => {
  const numberOfDays =
    getNumberOfDay() == 0 ? getMaxNumberOfDaysForChosenActivities() : getNumberOfDay();
  const numberOfPerson = getNumberOfPerson();
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);

  const DEFAULT_DISTANCE = 100;
  const FUEL_PRICE_PER_LITER = 1.8;

  let totalDriverPrice =
    (drivingCosts.driver + drivingCosts.food_for_driver + drivingCosts.accommodation_for_driver) *
      numberOfDays +
    drivingCosts.driver +
    drivingCosts.food_for_driver;
  //********* totalDriverPrice END *********

  let totalKmPerVehicle = 0;
  let previousLocation: any;

  chosenActivities.forEach((activity, index) => {
    const currentLocation = activityLocations.find(
      (location) => location.value == activity.locationName
    );

    if (index == 0) {
      totalKmPerVehicle += currentLocation?.distancesBetweenLocations.beograd
        ? currentLocation?.distancesBetweenLocations.beograd
        : DEFAULT_DISTANCE;
    } else {
      totalKmPerVehicle += previousLocation.distancesBetweenLocations[`${currentLocation?.value}`];
      if (chosenActivities.length == index + 1) {
        totalKmPerVehicle += currentLocation?.distancesBetweenLocations.beograd
          ? currentLocation?.distancesBetweenLocations.beograd
          : DEFAULT_DISTANCE;
      }
    }

    previousLocation = currentLocation;
  });
  //********* totalKmPerVehicle END *********

  let totalFuelPrice;
  let totalCarRentalPrice = 0;
  let requiredLitersOfFuel = 0;
  if (numberOfPerson < 5) {
    totalCarRentalPrice = drivingCosts.vehicle_5_seats * (numberOfDays + 1);

    requiredLitersOfFuel = totalKmPerVehicle * drivingCosts.vehicle_5_seats_liter_per_km;
  } else if (numberOfPerson >= 5 && numberOfPerson < 8) {
    totalCarRentalPrice = drivingCosts.vehicle_8_seats * (numberOfDays + 1);
    requiredLitersOfFuel = totalKmPerVehicle * drivingCosts.vehicle_8_seats_liter_per_km;
  } else if (numberOfPerson >= 8 && numberOfPerson <= 20) {
    totalCarRentalPrice = drivingCosts.vehicle_20_seats * (numberOfDays + 1);

    requiredLitersOfFuel = totalKmPerVehicle * drivingCosts.vehicle_20_seats_liter_per_km;
  }
  totalFuelPrice = requiredLitersOfFuel * FUEL_PRICE_PER_LITER;
  //********* totalCarRentalPrice, requiredLitersOfFuel, totalFuelPrice END *********

  const totalDrivingPrice = totalFuelPrice + totalDriverPrice + totalCarRentalPrice;

  return totalDrivingPrice;
};

export const getSummaryAccommodationPrice = () => {
  let summaryAccommodationPrice = 0;
  const numberOfDays =
    getNumberOfDay() == 0 ? getMaxNumberOfDaysForChosenActivities() : getNumberOfDay();
  const numberOfPerson = getNumberOfPerson();

  if (numberOfPerson < 3) {
    summaryAccommodationPrice = accommodationCosts.studio_apartment * numberOfDays;
  } else if (numberOfPerson == 3) {
    summaryAccommodationPrice = accommodationCosts.one_room_apartment * numberOfDays;
  } else if (numberOfPerson > 3 && numberOfPerson < 6) {
    summaryAccommodationPrice = accommodationCosts.two_room_apartment * numberOfDays;
  } else if (numberOfPerson == 6) {
    summaryAccommodationPrice = accommodationCosts.one_room_apartment * numberOfDays * 2;
  } else if (numberOfPerson > 6 && numberOfPerson < 9) {
    summaryAccommodationPrice =
      accommodationCosts.one_room_apartment * numberOfDays +
      accommodationCosts.two_room_apartment * numberOfDays;
  } else if (numberOfPerson > 8 && numberOfPerson < 11) {
    summaryAccommodationPrice =
      accommodationCosts.two_room_apartment * numberOfDays +
      accommodationCosts.two_room_apartment * numberOfDays;
  } else if (numberOfPerson > 10 && numberOfPerson < 14) {
    summaryAccommodationPrice =
      accommodationCosts.two_room_apartment * numberOfDays +
      accommodationCosts.two_room_apartment * numberOfDays +
      accommodationCosts.one_room_apartment * numberOfDays;
  } else if (numberOfPerson > 13 && numberOfPerson < 21) {
    summaryAccommodationPrice = 600;
  }

  return summaryAccommodationPrice;
};

export const getSummaryActivitiesPrice = () => {
  const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);
  let summaryActivitiesPrice = 0;
  chosenActivities.forEach((activity) => {
    summaryActivitiesPrice += activity.cost;
  });

  return summaryActivitiesPrice;
};

export const getSummaryFoodPrice = () => {
  const numberOfDays =
    getNumberOfDay() == 0 ? getMaxNumberOfDaysForChosenActivities() : getNumberOfDay();
  const numberOfPerson = getNumberOfPerson();
  const dailyMenuPrice = foodCosts.breakfast + foodCosts.lunch;
  let foodPrice = numberOfDays * numberOfPerson * dailyMenuPrice;

  return foodPrice;
};

export const getTotalPrice = () => {
  const summaryInsurancePrice = getSummaryInsurancePrice();
  const summaryDrivingPrice = getSummaryDrivingPrice();
  const summaryAccommodationPrice = getSummaryAccommodationPrice();
  const summaryActivitiesPrice = getSummaryActivitiesPrice();
  const summaryFoodPrice = getSummaryFoodPrice();

  const vacationPrice =
    summaryInsurancePrice +
    summaryDrivingPrice +
    summaryAccommodationPrice +
    summaryActivitiesPrice +
    summaryFoodPrice;

  const profit = (vacationPrice / 100) * percentageForProfit;

  const totalPrice = technicalCosts.site_maintenance + vacationPrice + profit;

  return totalPrice;
};
