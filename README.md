# Interactive Productivity Dashboard
This project is a web-based dashboard built for WEB -115 to demonstrate interctive JavaScript features.

## Future Enhancements
- [X] Add a weekly task goal calculator.
- [ ] Add JavaScript logic for a live clock.
- [ ] Integrate a task list with Array storage.

## Weekly Task Goals
This feature calculates a user’s task targets based on daily goals and weekly bonuses.

## Metric / Imperial Converter

BEGIN

  HTML form INPUT input_value

  HTML form SELECT conversion_type (select options: in to cm, ft to cm, yd to m, mi to km, cm to in, cm to ft, m to yd, km to mi)

  Convert input_value to decimal number using parseFloat()

  IF conversion_type equals inch_to_cent

    SET new_value equal to input_value multiplied by 2.54

  ELSE IF conversion_type equals foot_to_cent

    SET new_value equal to input_value multiplied by 30.48

  ELSE IF conversion_type equals yard_to_meter

    SET new_value equal to input_value multiplied by 0.91

  ELSE IF conversion_type equals mile_to_km

    SET new_value equal to input_value multiplied by 1.61

  ENDIF

  IF conversion_type equals cent_to_inch

    SET new_value equal to input_value multiplied by 0.39

  ELSE IF conversion_type equals cent_to_foot 

    SET new_value equal to input_value multiplied by 0.0328

  ELSE IF conversion_type equals meter_to_yard

    SET new_value equal to input_value multiplied by 1.09

  ELSE IF conversion_type equals km_to_mile

    SET new_value equal to input_value multiplied by 0.62

 ENDIF

DISPLAY "input_value + starting units = new_value + ending units" restricted to 2 decimal places using toFixed()

END
