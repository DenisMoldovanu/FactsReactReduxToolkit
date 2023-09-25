import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../redux/favoriteSlice";
const FavoriteFacts = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorites = (fact) => {
    dispatch(removeFromFavorites(fact));
  };
  return (
    <div className="favourite-facts">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favourites selected</p>
      ) : (
        <ul>
          {favorites.map((fact, index) => (
            <li key={index} onClick={() => handleRemoveFavorites(fact)}>
              {fact}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteFacts;
