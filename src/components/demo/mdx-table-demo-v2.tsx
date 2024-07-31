import React from 'react';
import { MDXTable } from '@/components/ui-pro/mdx-table_v2';

const nbaPlayersData = [
    {
      Position1: { value: 'Point Guard' },
      Position2: { value: 'Shooting Guard' },
      Position3: { value: 'Small Forward' },
      Position4: { value: 'Power Forward' },
      Position5: { value: 'Center' },
    },
    {
        Position1: { value: 'Stephen Curry' },
        Position2: { value: 'James Harden' },
        Position3: { value: 'LeBron James' },
        Position4: { value: 'Giannis Antetokounmpo' },
        Position5: { value: 'Joel Embiid' },
    },
    {
        Position1: { value: 'Kyrie Irving' },
        Position2: { value: 'Klay Thompson' },
        Position3: { value: 'Kevin Durant' },
        Position4: { value: 'Anthony Davis' },
        Position5: { value: 'Nikola Jokic' },
    },
    {
        Position1: { value: 'Chris Paul' },
        Position2: { value: 'Devin Booker' },
        Position3: { value: 'Kawhi Leonard' },
        Position4: { value: 'Blake Griffin' },
        Position5: { value: 'Rudy Gobert' },
    },
    {
        Position1: { value: 'Damian Lillard' },
        Position2: { value: 'Donovan Mitchell' },
        Position3: { value: 'Jimmy Butler' },
        Position4: { value: 'Jayson Tatum' },
        Position5: { value: 'Karl-Anthony Towns' },
    },
  ];

export  function MDXTableDemo_V2() {
  return (
    <div>
      <MDXTable data={nbaPlayersData} />
    </div>
  );
}
