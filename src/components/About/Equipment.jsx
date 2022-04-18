import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

function Equipment() {
  const { dictionary } = useLanguage();
  const { theme } = useTheme();
  const [equipVisible, setEquipVisible] = useState(false);

  const handleClick = () => setEquipVisible(!equipVisible);

  return (
    <div className="equipment">
      <h3>{dictionary.about.equipment}</h3>
      <div>
        <h4>{dictionary.about.bathroom}</h4>
        <ul>
          <li>{dictionary.about.kitchenRoom.heating}</li>
          <li>{dictionary.about.kitchenRoom.shower}</li>
          <li>{dictionary.about.kitchenRoom.soap}</li>
        </ul>
        <h4>{dictionary.about.room}</h4>
        <ul>
          <li>{dictionary.about.livingRoom.tv}</li>
          <li>{dictionary.about.livingRoom.hdmi}</li>
          <li>{dictionary.about.livingRoom.games}</li>
        </ul>

        <h4>{dictionary.about.bedroom}</h4>
        <ul>
          <li>{dictionary.about.bedRoom.bed}</li>
          <li>{dictionary.about.bedRoom.bunkBed}</li>
          <li>{dictionary.about.bedRoom.mattress}</li>
          <li>{dictionary.about.bedRoom.blanket}</li>
          <li>{dictionary.about.bedRoom.bedLinen}</li>
        </ul>

        {equipVisible && (
          <>
            <h4>{dictionary.about.kitchen}</h4>
            <ul>
              <li>{dictionary.about.kitchenRoom.cooker}</li>
              <li>{dictionary.about.kitchenRoom.oven}</li>
              <li>{dictionary.about.kitchenRoom.microwave}</li>
              <li>{dictionary.about.kitchenRoom.kettle}</li>
              <li>{dictionary.about.kitchenRoom.coffee}</li>
              <li>{dictionary.about.kitchenRoom.washing}</li>
              <li>{dictionary.about.kitchenRoom.fridge}</li>
              <li>{dictionary.about.kitchenRoom.kitchentEquip}</li>
              <li>{dictionary.about.kitchenRoom.food}</li>
              <li>{dictionary.about.kitchenRoom.dishes}</li>
            </ul>

            <h4>{dictionary.about.children}</h4>
            <ul>
              <li>{dictionary.about.childrenEq.childBed}</li>
              <li>{dictionary.about.childrenEq.chair}</li>
              <li>{dictionary.about.childrenEq.wc}</li>
              <li>{dictionary.about.childrenEq.bath}</li>
            </ul>
            <h4>{dictionary.about.otherEq.otherEquip}</h4>
            <ul>
              <li>{dictionary.about.otherEq.vacuum}</li>
              <li>{dictionary.about.otherEq.terrace}</li>
              <li>{dictionary.about.otherEq.gril}</li>
              <li>{dictionary.about.otherEq.waste}</li>
              <li>{dictionary.about.otherEq.snow}</li>
              <li>{dictionary.about.otherEq.car}</li>
              <li>{dictionary.about.otherEq.keys}</li>
              <li>{dictionary.about.otherEq.sport}</li>
              <li>{dictionary.about.otherEq.garden}</li>
            </ul>
          </>
        )}
        <button
          style={{
            color: theme.colors.aboutBackground,
          }}
          className="showMore"
          onClick={handleClick}
        >
          {equipVisible ? dictionary.about.hideAll : dictionary.about.showMore}
        </button>
      </div>
    </div>
  );
}

export default Equipment;
