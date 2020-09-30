var employeePromise = d3.csv("employee.csv");

var successFCN = function(employees)
    {
        console.log("employee",employees);
        drawTable(employees);
    }
var failureFCN = function(employees)
    {
        console.log("Error", employees)
    }

employeePromise.then(successFCN,failureFCN)


var drawTable = function(employees)
    {
        var rows = d3.select("tbody")
            .selectAll("tr")
            .data(employees)
            .enter()
            .append("tr")
        
        rows.append("td")
            .text(function(employee)
                 {
                return employee.Name
        })
        
        rows.append("td")
            .text(function(employee)
                 {
                return employee.Title
        })
        
        rows.append("td")
            .text(function(employee)
                 {
                return employee.Email
        })
    }