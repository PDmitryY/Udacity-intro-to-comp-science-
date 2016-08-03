# Given your birthday and the current date, calculate your age in days. 
# Account for leap days. 
#
# Assume that the birthday and current date are correct dates (and no 
# time travel). 
#

def daysBetweenDates(year1, month1, day1, year2, month2, day2):
    def d_year(year):
        sum_of_days_in_years = 0
        d = 1890
        while 0<d<year:
            if d % 4 == 0 and d % 100 != 0:
                days_in_year = 366
            elif d % 400 == 0:
                days_in_year = 366
            else:
                days_in_year = 365
            sum_of_days_in_years = sum_of_days_in_years + days_in_year
            d = d + 1
        return sum_of_days_in_years
    def d_month(month, year):
        if year % 4 == 0 and year % 100 != 0:
            days_in_months = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        elif year % 400 == 0:
            days_in_months = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        else:
            days_in_months = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        i=0
        sum_of_days = 0
        while 0<=i<=month-2:
            sum_of_days = sum_of_days+days_in_months[i]
            i=i+1
        return sum_of_days
    Day_old = d_year(year2) + d_month(month2,year2) + day2 - d_year(year1) - d_month(month1,year1) - day1
    return Day_old

        

# Test routine

def test():
    test_cases = [((2012,1,1,2012,2,28), 58), 
                  ((2012,1,1,2012,3,1), 60),
                  ((2011,6,30,2012,6,30), 366),
                  ((2011,1,1,2012,8,8), 585 ),
                  ((1900,1,1,1999,12,31), 36523)]
    for (args, answer) in test_cases:
        result = daysBetweenDates(*args)
        if result != answer:
            print "Test with data:", args, "failed"
        else:
            print "Test case passed!"

test()