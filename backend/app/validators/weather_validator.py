from datetime import datetime


def validate_weather_request(data):
    try:
        start_date = datetime.strptime(
            data.startDate,
            "%Y-%m-%d"
        )

        end_date = datetime.strptime(
            data.endDate,
            "%Y-%m-%d"
        )

    except ValueError:
        return (
            False,
            "Invalid date format"
        )

    date_diff = (
        end_date - start_date
    ).days

    if date_diff < 0:
        return (
            False,
            "End date must be after start date"
        )

    if date_diff > 7:
        return (
            False,
            "Date range cannot exceed 7 days"
        )

    if not data.location.strip():
        return (
            False,
            "Location not found"
        )

    return (
        True,
        None,
    )