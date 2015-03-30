angular.module('app').controller('mvMainCtrl', function($scope) {
  $scope.courses = [
    {name: 'C# for Sociopaths', featured: true, published: new Date('1/5/2015')},
    {name: 'C# for Non-Sociopaths', featured: true, published: new Date('1/1/2015')},
    {name: 'Super Duper Expert C#', featured: false, published: new Date('1/10/2015')},
    {name: 'VB Made easy', featured: true, published: new Date('2/7/2015')},
    {name: 'Pendantic C++', featured: false, published: new Date('2/14/2015')},
    {name: 'A survival guide to code review', featured: true, published: new Date('12/21/2014')},
    {name: 'Node in 24hours', featured: false, published: new Date('12/11/2014')},
    {name: 'MongoDB', featured: false, published: new Date('11/4/2014')},
    {name: 'MEAN Stack', featured: true, published: new Date('11/23/2014')},
    {name: 'Ruby on Rails', featured: true, published: new Date('10/24/2014')},
    {name: 'Angular 2.0', featured: true, published: new Date('10/31/2014')}
  ]
});
