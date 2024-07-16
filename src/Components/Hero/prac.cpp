#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void solve(string &text1, vector <string> &ans, string &temp, int i)
{
    if(i >= text1.length())
    {
        ans.push_back(temp);
        return;
    } 
    temp.push_back(text1[i]);
    solve(text1, ans, temp, i+1);
    temp.pop_back();
    solve(text1, ans, temp, i+1);
}     

int main()
{
    string text1 = "ace";
    vector <string> ans;
    string temp = "";
    solve(text1, ans, temp, 0);

    for(auto i : ans)
    {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
