//Chandhar 106117063
#include<bits/stdc++.h>
using namespace std;
int main()
{
	int i,j,n,temp, min;
	cout<<"Enter number of elements: ";
	cin>>n;
	int a[n];
	cout<<"Enter array elements, one by one";
	for(i=0;i<n;i++) cin>>a[i];
	for(i=0;i<n;i++)
	{
		min = a[i];
		for(j=i+1;j<n;j++)
		{
			if(a[j]<min)
				min = a[j];
			pos = j;
		}
		temp = a[i];
		a[i] = a[pos];
		a[pos] = temp;
	}
	cout<<"The array in sorted order is:- "<<endl;
	for(i=0;i<n;i++)
		cout<<a[i]<<" ";
	cout<<endl;
}
